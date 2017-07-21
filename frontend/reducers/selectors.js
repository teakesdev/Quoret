import { values } from 'lodash';

export const selectAllQuestions = ({ questions }) => values(questions.entities);

export const selectSingleQuestion = (questions, questionId) => {
  const question = questions[questionId] || {};
  return question;
};
