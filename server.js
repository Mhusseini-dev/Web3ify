// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port to listen on
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// GET request
app.get('/about', (req, res) => {
    res.send('About Page');
  });
  
  // POST request
  app.post('/submit', (req, res) => {
    res.send('POST request received');
  });
  
  // PUT request
  app.put('/update', (req, res) => {
    res.send('PUT request received');
  });
  
  // DELETE request
  app.delete('/delete', (req, res) => {
    res.send('DELETE request received');
  });



//   // Import dependencies
// const express = require('express');
// const { ethers } = require('ethers');
// require('dotenv').config(); // Load environment variables

// // Create an Express app
// const app = express();
// app.use(express.json()); // Middleware to parse JSON

// // Set up Ethereum provider (Infura/Alchemy or Local Node)
// const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL); 

// // Load contract details
// const contractABI = [
//   // Add your contract's ABI here
// ];
// const contractAddress = "0xYourSmartContractAddress"; 
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider); 
// const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// // Root route
// app.get('/', (req, res) => {
//   res.send('Web3 API is running!');
// });

// // Example Web3 API route to read from the blockchain
// app.get('/balance/:address', async (req, res) => {
//   try {
//     const balance = await provider.getBalance(req.params.address);
//     res.json({ balance: ethers.formatEther(balance) });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Example Web3 API route to interact with a smart contract
// app.post('/send-tokens', async (req, res) => {
//   try {
//     const { recipient, amount } = req.body;
//     const tx = await contract.transfer(recipient, ethers.parseUnits(amount, 18));
//     await tx.wait();
//     res.json({ success: true, txHash: tx.hash });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Define the port to listen on
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Web3 server is running on http://localhost:${PORT}`);
// });



 