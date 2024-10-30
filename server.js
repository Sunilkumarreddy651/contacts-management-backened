// Import the Express application from app.js
const app = require('./app');

// Set the port for the server
const PORT = process.env.PORT || 5000; // Use the PORT environment variable if available, otherwise default to 5000

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message indicating that the server has started
});
