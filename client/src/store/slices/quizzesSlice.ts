import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getQuizzes } from "../thunks/getQuizzes";

interface Quiz {
    id: string;
    course: string;
    topic: string;
    date: string;
  }
const initialState: Quiz[] = [];

const quizzesSLice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(getQuizzes.fulfilled, (state, action: PayloadAction<Quiz[]>) => {
      return action.payload; 
    });
  },
});
export const quizesReducer =  quizzesSLice.reducer;
