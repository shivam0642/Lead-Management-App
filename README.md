**Lead Management App**

A simple Node.js backend application for managing sales leads. This app allows you to create new leads, view all leads, and store lead data in a MongoDB database. It is built using Express.js and Mongoose, following the MVC pattern for clean and maintainable code architecture.
 
_________________________________________________________________________________________________________________________________________________________________

**Features**

- Create new sales leads with details like name, email, phone, and message.

- Fetch and display all stored leads.
  
- Organized using MVC architecture for scalability and maintainability.
  
- Uses MongoDB for data persistence.
  
- Easily extendable to add more features or connect with any frontend.

____________________________________________________________________________________________________________________________________________________________________

**Technologies Used**

- Node.js
  
- Express.js
  
- MongoDB
  
- Mongoose
  
- dotenv
  
- Morgan (HTTP request logger)
  
_______________________________________________________________________________

**Getting Started**

##Prerequisites

- Node.js installed (v14+ recommended)
  
- MongoDB installed and running locally or access to a MongoDB Atlas cluster


### Installation

1. Clone the repository:
git clone https://github.com/shivam0642/Lead-Management-App.git

2. Navigate to the project directory:
cd lead-management-app

3. Install dependencies:
npm install

4. Create a `.env` file in the root directory and add your MongoDB connection string:
MONGO_URL=your_mongodb_connection_string
PORT=5000

5. Start the server in development mode (with auto restart):
npm run dev


The server will be running on `http://localhost:5000`.

## API Endpoints

- `POST /api/v1/lead/` — Create a new lead (requires JSON body with `name`, `email`, `phone`, `message`)
- `GET /api/v1/lead/` — Fetch all leads

______________________________________________

## Folder Structure

Lead-Management-App/
├── config/ # Database configuration
├── controller/ # Controller functions for routes
├── models/ # Mongoose schema definitions
├── routes/ # Route definitions
├── server.js # Entry point of the app
├── .env # Environment variables (not included in repo)
└── package.json # Project metadata and dependencies

__________________________________________________________

## License

MIT License

---

Feel free to customize the README further by adding screenshots, usage examples, or contact information.
