const mongoose = require('mongoose');

// Define the Contact schema with field validations
const ContactSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: [false, 'First Name is required'], 
        match: [/^[A-Za-z]+$/, 'First Name should contain only alphabetic characters'] 
    },
    lastName: { 
        type: String, 
        required: [false, 'Last Name is required'], 
        match: [/^[A-Za-z]+$/, 'Last Name should contain only alphabetic characters'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'], 
        unique: false, 
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'] 
    },
    phone: { 
        type: String, 
        required: [true, 'Phone number is required'], 
        unique: false, 
        match: [/^\d{10}$/, 'Phone number should be 10 digits']
    },
    address: { 
        type: String,
        validate: {
            validator: function(v) {
                // Allow address to be optional, but validate if provided
                return !v || v.length <= 100; // Example: limiting address to 100 characters
            },
            message: 'Address must be within 100 characters'
        }
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Contact', ContactSchema);
