import {
  createAnnouncement,
  updateAnnouncement,
  deletAnnouncement,
  getAnnouncements,
} from "../controllers/announcements.js";
import express from "express";
const announcementRoutes = express.Router();

/**
 * Creates a new announcement.
 * 
 * @route POST /api/announcements
 * @group Announcements - Operations related to announcements
 * @param {object} request.body - The announcement details
 * @param {string} request.body.title - The title of the announcement
 * @param {string} request.body.content - The content of the announcement
 * @param {Date} [request.body.date] - The date of the announcement (optional, defaults to the current date)
 * @returns {object} 201 - The created announcement object
 * @returns {object} 400 - Error message indicating that the announcement could not be created
 * @returns {Error} 500 - Unexpected error
 * */
announcementRoutes.post("/", createAnnouncement);


/**
 * Retrieves all announcements from the database.
 * 
 * @route GET /api/announcements
 * @group Announcements - Operations related to announcements
 * @returns {object[]} 200 - An array of announcement objects
 * @returns {Error} 500 - Unexpected error
 * */
announcementRoutes.get("/", getAnnouncements);

/**
 * Updates a specific announcement by its ID.
 * 
 * @route PUT /api/announcements/{id}
 * @group Announcements - Operations related to announcements
 * @param {string} id.path.required - The ID of the announcement to update
 * @param {object} request.body - The updated announcement details
 * @param {string} [request.body.title] - The updated title of the announcement (optional)
 * @param {string} [request.body.content] - The updated content of the announcement (optional)
 * @param {Date} [request.body.date] - The updated date of the announcement in ISO 8601 format (optional)
 * @returns {object} 200 - The updated announcement object
 * @returns {object} 400 - Error message indicating invalid request or announcement not found
 * @returns {Error} 500 - Unexpected error
 * */
announcementRoutes.put("/:id", updateAnnouncement);


/**
 * Deletes a specific announcement by its ID.
 * 
 * @route DELETE /api/announcements/{id}
 * @group Announcements - Operations related to announcements
 * @param {string} id.path.required - The ID of the announcement to delete
 * @returns {object} 200 - Success message indicating the announcement was deleted
 * @returns {object} 400 - Error message indicating the announcement was not found or could not be deleted
 * @returns {Error} 500 - Unexpected error
 * */
announcementRoutes.delete("/:id", deletAnnouncement);

export { announcementRoutes };
