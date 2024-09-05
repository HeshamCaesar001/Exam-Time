
# Exam Time 🎓🕒

Welcome to **Exam Time**! This project is designed to provide announcements and quizzes for logged-in students. Below you’ll find information on how to set up and run both the backend and frontend parts of the project.

## Project Structure 📁

The project is structured into two main folders:

### Backend 🚀

The backend is built using Node.js, Express.js, and MongoDB. It contains the following structure:

- **`src/`**: The source directory.
  - **`controllers/`**: Handles CRUD operations for each route.
  - **`models/`**: Contains the two models:
    - **`Quiz.js`**: Model for quizzes.
    - **`Announcement.js`**: Model for announcements.
  - **`routes/`**: Defines routes for each model.
  - **`index.js`**: The entry point for the server, containing DB configuration and server startup logic.

**Configuration:**

- Create a `.env` file in the root of the server directory with the following variables:
  ```env
  PORT=5000
  MONGODB_URI=<your_mongodb_connection_string>
  ```

- API documentation can be found here: [API Documentation](https://documenter.getpostman.com/view/24948177/2sAXjNZXQu)

### Frontend 🌐

The frontend is developed using React.js, TypeScript, and Material-UI. It contains the following structure:

- **`public/`**: Contains the main `index.html` file and images used in the project.
- **`src/`**: The source directory.
  - **`components/`**: Reusable React components.
  - **`pages/`**: Components for different pages.
  - **`apis/`**: API utility functions.
  - **`hooks/`**: Custom React hooks.
  - **`store/`**: Redux logic, including slices and store configuration.

**Running the Frontend:**

- The frontend runs on port 3000 by default.

## Getting Started 🚀

### Backend

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/HeshamCaesar001/Exam-Time.git
   cd server
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the server directory with the necessary environment variables.

4. **Start the Server:**
   ```bash
   npm run dev
   ```

### Frontend

1. **Navigate to the Client Folder:**
   ```bash
   cd client
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the React App:**
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Contributing 🤝

If you’d like to contribute to this project, please follow these steps:

1. **Fork the Repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes.**
4. **Commit your changes:**
   ```bash
   git commit -am 'Add new feature'
   ```
5. **Push to the branch:**
   ```bash
   git push origin feature/YourFeature
   ```
6. **Create a new Pull Request.**

## Contact 📧

For any questions or suggestions, feel free to reach out!

Happy coding! 😊🚀
