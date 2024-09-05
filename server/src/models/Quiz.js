import mongoose from "mongoose";
const quizSchema = mongoose.Schema({
  course: String,
  topic: String,
  dueDate: Date,
});

export const Quiz = mongoose.model("Quiz", quizSchema);
