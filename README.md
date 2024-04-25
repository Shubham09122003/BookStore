Installation and Running Instructions
Step 1: Clone the Repository
git clone <repository-url>

Step 2: Install Dependencies
Navigate to the backend directory:

cd book-inventory-management-system/backend
npm install
Navigate to the frontend directory:

cd ../frontend
npm install

Step 3: Set Up Environment Variables
Create a .env file in the backend directory.
Define environment variables such as database connection string, JWT secret, and any other required configurations in the .env file.

Step 4: Initialize the Database
Ensure MongoDB is installed and running on your local machine.
Create a new database for the Book Inventory Management System.
Seed the database with initial data if necessary.

Step 5: Run the Backend Server
Navigate to the backend directory:

cd backend
npm start

Step 6: Run the Frontend Application
Navigate to the frontend directory:

cd frontend
npm start

Step 7: Access the Application
Open your web browser and navigate to http://localhost:3000 (or the specified port if different).
You should see the login page or the homepage of the Book Inventory Management System.
If prompted, use the provided credentials to log in as an administrator or a regular user.
Step 8: Explore and Test

Explore the different features and functionalities of the Book Inventory Management System.
Test various scenarios, such as adding new books, placing orders, and generating reports.
Ensure that the system behaves as expected and meets the specified requirements.
Step 9: Shut Down the Application

To stop the backend server, press Ctrl + C in the terminal where it is running.
To stop the frontend application, press Ctrl + C in the terminal where it is running.
Step 10: Clean Up

Optionally, delete the cloned repository from your local machine if no longer needed.
