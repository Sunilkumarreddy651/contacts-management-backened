// Import mongoose to enable connection with MongoDB.
const mongoose = require('mongoose');

// Define an asynchronous function to establish a connection to the MongoDB database.
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI specified in environment variables.
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Ensures compatibility with new URL string format for MongoDB.
            useUnifiedTopology: true, // Uses the new Server Discover and Monitoring engine for better connection handling.
        });

        // Log successful connection.
        console.log('MongoDB Connected');
    } catch (error) {
        // Handle any connection errors and log them.
        console.error('MongoDB connection error:', error.message);

        // Exit the process with failure (1) if the connection fails.
        process.exit(1);
    }
};

// Export the connectDB function to allow use in other files (e.g., in the main server file).
module.exports = connectDB;
