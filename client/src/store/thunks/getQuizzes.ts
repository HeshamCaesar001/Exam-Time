import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchQuizzes} from '../../apis/apis'
interface Quiz {
  id: string;
  course: string;
  topic: string;
  date: string;
}

export const getQuizzes = createAsyncThunk<Quiz[]>(
  'quizzes/get',
  async () => {
    const response = await fetchQuizzes();
    return response as Quiz[]; 
  }
);
