import {
  createQuiz,
  deleteQuiz,
  updateQuiz,
  getQuizzes,
} from "../controllers/quiz.js";
import express from "express";

const quizRoutes = express.Router();

/**
 * Creates a new quiz.
 *
 * @route POST /api/quizzes
 * @group Quizzes - Operations related to quizzes
 * @param {object} request.body - The quiz details
 * @param {string} request.body.course - The name of the course for the quiz
 * @param {string} request.body.topic - The topic of the quiz
 * @param {Date} request.body.dueDate - The due date of the quiz in ISO 8601 format
 * @returns {object} 201 - The created quiz object
 * @returns {object} 400 - Error message indicating that the quiz could not be created
 */
quizRoutes.post("/", createQuiz);


/**
 * Retrieves all quizzes from the database.
 *
 * @route GET /api/quizzes
 * @group Quizzes - Operations related to quizzes
 * @returns {object[]} 200 - An array of quiz objects
 * @returns {Error} 500 - Unexpected error
 * */
quizRoutes.get("/", getQuizzes);



/**
 * Updates a specific quiz by its ID.
 *
 * @route PUT /api/quizzes/{id}
 * @group Quizzes - Operations related to quizzes
 * @param {string} id.path.required - The ID of the quiz to update
 * @param {object} request.body - The updated quiz details
 * @param {string} [request.body.course] - The updated course name (optional)
 * @param {string} [request.body.topic] - The updated topic (optional)
 * @param {Date} [request.body.dueDate] - The updated due date in ISO 8601 format (optional)
 * @returns {object} 200 - The updated quiz object
 * @returns {object} 400 - Error message indicating invalid request or quiz not found
 * @returns {Error} 500 - Unexpected error
 * */
quizRoutes.put("/:id", updateQuiz);



/**
 * Deletes a specific quiz by its ID.
 *
 * @route DELETE /api/quizzes/{id}
 * @group Quizzes - Operations related to quizzes
 * @param {string} id.path.required - The ID of the quiz to delete
 * @returns {object} 200 - Success message indicating the quiz was deleted
 * @returns {object} 400 - Error message indicating the quiz was not found or could not be deleted
 * @returns {Error} 500 - Unexpected error
 * */
quizRoutes.delete("/:id", deleteQuiz);

export { quizRoutes };
