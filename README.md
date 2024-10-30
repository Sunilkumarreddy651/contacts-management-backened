### BACKEND:
- RESTful API for managing contacts.
- CRUD operations: Create, Read, Update, Delete.
- MongoDB for storing contacts.

- **Backend Tools used:** Node.js, Express.js, MongoDB

## INSTALLATION

### Prerequisites
- Node.js and npm (Node Package Manager) must be installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- MongoDB must be set up and running. You can use a local instance or a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### BACKEND SETUP
1. Navigate to the backend directory:
   
- cd backend

2.Install the backend dependencies:

- npm install


3.Create a .env file in the backend directory with the following content:

-  MONGODB_URI=your_mongodb_connection_string
-  PORT=5000
-  Replace your_mongodb_connection_string with your actual MongoDB connection string.

4.Start the backend server:

-  node server.js # after giving this command in terminal it will show the below lines.
-  Server is running on port 5000
-  MongoDB connected
