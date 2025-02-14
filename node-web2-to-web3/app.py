import requests
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import base64

# Initialize logging
logging.basicConfig(level=logging.INFO)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

GITHUB_TOKEN = ""
HEADERS = {"Authorization": f"token {GITHUB_TOKEN}"}

genai.configure(api_key="")

def get_app_js_content(repo_url, branch="master"):
    repo_path = repo_url.replace("https://github.com/", "")
    api_url = f"https://api.github.com/repos/{repo_path}/contents/src/App.js?ref={branch}"
    
    try:
        response = requests.get(api_url, headers=HEADERS)
        response.raise_for_status()
        file_data = response.json()
        
        if file_data.get("encoding") == "base64":
            print(base64.b64decode(file_data["content"]).decode("utf-8"))
            return base64.b64decode(file_data["content"]).decode("utf-8")
        return file_data.get("content", "")
    except requests.exceptions.RequestException as e:
        logging.error(f"Failed to fetch App.js: {e}")
        return None

def analyze_app_js(repo_url):
    app_js_content = get_app_js_content(repo_url)
    if not app_js_content:
        return "Failed to fetch App.js or file not found."

    prompt = f"Analyze the following App.js file and suggest how to integrate MetaMask:\n\n{app_js_content}"
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    print(response)
    
    return response.text.strip() if response.text else "No response from Gemini AI."

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    repo_url = data.get("repo_url")
    if not repo_url:
        return jsonify({"message": "Repository URL is required."}), 400
    
    suggestions = analyze_app_js(repo_url)
    return jsonify({
        "suggestions": suggestions,
        "message": "Analysis completed successfully!"
    })

if __name__ == "__main__":
    app.run(debug=True)
