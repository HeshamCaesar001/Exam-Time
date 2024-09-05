import { Quiz } from "../models/Quiz.js";

export const createQuiz = async (req, res) => {
  const quiz = new Quiz(req.body);
  try {
    await quiz.save();
    res.status(201).send(quiz); 
  } catch (error) {
    res.status(400).send({ message: "Could not create quiz." })
  }
};
export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(201).send(quizzes); 
  } catch (error) {
    res.status(400).send({ message: "Could not get quizzes." })
  }
};
export const updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).send(quiz); 
  } catch (error) {
    res.status(400).send({ message: "Could not update quiz." })
  }
};
export const deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.send({ message: "Quiz deleted" });
  } catch (error) {
    res.status(400).send({ message: "Could not delete quiz." })

  }
};
