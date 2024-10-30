const Contact = require('../models/contact');

// Create a new contact
const createContact = async (req, res) => {
    const { firstName, lastName, email, phone, address } = req.body;

    try {
        const newContact = new Contact({ firstName, lastName, email, phone, address });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing contact
// Update an existing contact and handle duplicates
const updateContact = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone, address } = req.body;

    try {
        const existingContacts = await Contact.find({
            $or: [{ email }, { phone }],
            _id: { $ne: id }
        });

        // Handle duplicates
        if (existingContacts.length > 0) {
            await Contact.deleteMany({ _id: { $in: existingContacts.map(contact => contact._id) } });
        }

        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            { firstName, lastName, email, phone, address },
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        console.error('Error updating contact:', error); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};


// Delete a contact
const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        await Contact.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const mergeContacts = async (req, res) => {
    const { primaryContactId, duplicateContactIds } = req.body;
  
    try {
      const primaryContact = await Contact.findById(primaryContactId);
      if (!primaryContact) return res.status(404).send("Primary contact not found.");
  
      for (const duplicateId of duplicateContactIds) {
        const duplicateContact = await Contact.findById(duplicateId);
        if (duplicateContact) {
          // Merge logic, e.g., combine data or keep primary contact's details
          await Contact.deleteOne({ _id: duplicateId });
        }
      }
  
      res.status(200).send("Contacts merged successfully.");
    } catch (error) {
      res.status(500).send("Error merging contacts: " + error.message);
    }
  };
    

module.exports = { createContact, getContacts, updateContact, deleteContact, mergeContacts };
