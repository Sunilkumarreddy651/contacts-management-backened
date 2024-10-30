const express = require('express');
const { createContact, getContacts, updateContact, deleteContact, mergeContacts } = require('../controllers/contactController');

const router = express.Router();

// Route to create a new contact
router.post('/', createContact);

// Route to get all contacts
router.get('/', getContacts);

// Route to update a specific contact by ID
router.put('/:id', updateContact);

// Route to delete a specific contact by ID
router.delete('/:id', deleteContact);

// Route to merge selected duplicates
router.post('/merge', mergeContacts); // New route for merging contacts

// Export the router to use in the main app
module.exports = router;
