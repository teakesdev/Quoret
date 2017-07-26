import { values } from 'lodash';

export const selectAllQuestions = ({ questions }) => values(questions.entities);
export const selectAllComments = ({ comments }) => values(comments);

export const selectSingleQuestion = (questions, questionId) => {
  const question = questions[questionId] || {};
  return question;
};

// let formattedAnswers = [];
//   Object.keys(answers).forEach(id => formattedAnswers.push(answers[id]));
//   return formattedAnswers;
