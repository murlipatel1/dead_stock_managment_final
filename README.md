# Dead-Stock-Management | A MERN STACK PROJECT

For Running on your System, Clone the Repository
# MERN Stack Management - Readme

## Project Overview
MERN Stack Management is a web application built using the MERN (MongoDB, Express, React, Node.js) stack. The purpose of this project is to help manage dead items in a warehouse and alert the owner. The application provides a user-friendly interface to locate dead items in the warehouse and notify the owner via alerts.

## Features
- User Authentication: The application supports user authentication and authorization, allowing users to sign up, log in, and manage their accounts securely.

- Dead Item Management: Users can add, view, edit, and delete dead items in the warehouse. Each item is associated with relevant details such as name, description, location, and date of identification.

- Warehouse Visualization: The application provides a visual representation of the warehouse, allowing users to easily identify the location of dead items through an intuitive interface.

- Alert System: When a dead item is identified, the application sends an alert to the owner through the web interface. The alert may include details about the dead item and its location.

## Prerequisites
Make sure you have the following software installed before running the application:

- Node.js: Download and install Node.js from the official website (https://nodejs.org).
- MongoDB: Install MongoDB Community Edition from the official website (https://www.mongodb.com/try/download/community).

## Installation
Follow these steps to set up the MERN Stack Management application:

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```
   cd mern-stack-management
   ```

3. Install the dependencies for the server:
   ```
   cd server
   npm install
   ```

4. Create a `.env` file in the server directory and configure the following environment variables:
   ```
   PORT=3000
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

5. Install the dependencies for the client:
   ```
   cd ../client
   npm install
   ```

6. Start the server:
   ```
   cd ../server
   npm start
   ```

7. In a separate terminal, start the client:
   ```
   cd ../client
   npm start
   ```

8. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Folder Structure
The project follows a specific folder structure:

- `server`: Contains the backend server code built with Node.js and Express.
  - `db`: Contains configuration files for the server.
  - `controllers`: Implements the logic for various API routes.
  - `middleware`: Includes middleware functions for authentication and error handling.
  - `models`: Defines the data models for the application using Mongoose.
  - `routes`: Defines the API routes and their associated controller functions.
  - `index.js`: Entry point for the server.

- `client`: Contains the frontend client code built with React.
  - `public`: Contains static assets and the main `index.html` file.
  - `src`: Contains the React components, styles, and other application-specific files.
    - `components`: Contains reusable UI components.
    - `pages`: Contains the main pages of the application.
    - `services`: Implements the client-side API services.
    - `App.js`: Main component that serves as the entry point for the React app.
    - `index.js`: Entry point for the client.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with descriptive commit messages.
5. Push your changes to your forked repository.
6. Submit a pull request explaining the changes you've made.
