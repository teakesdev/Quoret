import { values } from 'lodash';

export const selectAllQuestions = ({ questions }) => values(questions.entities);
export const selectAllComments = ({ comments }) => values(comments);
export const selectAllReplies = ({ replies }) => values(replies);

export const selectSingleQuestion = (questions, questionId) => {
  const question = questions[questionId] || {};
  return question;
};
