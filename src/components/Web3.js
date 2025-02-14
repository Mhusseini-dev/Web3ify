import React, { useState } from "react";

const Web3 = () => {
      const [repoUrl, setRepoUrl] = useState('');
      const [suggestions, setSuggestions] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      const {web3} = new Web3(window.ethereum); 
    
      const [userAccount, setUserAccount] = useState(null);
    
      // Connect to MetaMask
      const connectMetaMask = async () => {
        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setUserAccount(accounts[0]);
          } catch (error) {
            console.error("User denied account access");
          }
        } else {
          alert("MetaMask is not installed!");
        }
      };
    
      // Function to analyze the repository and submit to blockchain
      const handleAnalyze = async () => {
        if (!repoUrl) return alert("Please enter a GitHub repository URL");
        if (!userAccount) return alert("Please connect MetaMask first");
    
        setIsLoading(true);
    
        // Send GitHub URL and user address to backend for analysis
        const response = await fetch('http://localhost:5000/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            repo_url: repoUrl,
            user_address: userAccount 
          }),
        });
    
        const data = await response.json();
        setSuggestions(data.suggestions);
    
        // Display transaction hash (for blockchain interaction)
    
        setIsLoading(false);
      };
    
    
   return (
    <div className="App">
      <h1>GitHub MetaMask Integration AI</h1>

      <button onClick={connectMetaMask}>
        Connect MetaMask
      </button>

      <input
        type="text"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        placeholder="Enter GitHub Repository URL"
      />
      <button onClick={handleAnalyze} disabled={isLoading}>
        {isLoading ? "Analyzing..." : "Analyze"}
      </button>

      {suggestions && <pre>{suggestions}</pre>}
    </div>
  );

}

export default Web3