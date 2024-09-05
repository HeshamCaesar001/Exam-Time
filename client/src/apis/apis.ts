import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; 

export const fetchQuizzes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/quizzes`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching quizzes");
    }
  };
  
  
  export const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/announcements`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching announcements");
    }
  };