import * as APIUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_A_QUESTION = 'RECEIVE_A_QUESTION';
export const DELETE_A_QUESTION = 'DELETE_A_QUESTION';
export const ERROR_QUESTION = 'ERROR_QUESTION';

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions,
});

export const receiveAQuestion = question => ({
  type: RECEIVE_A_QUESTION,
  question,
});


export const deleteQuestion = question => ({
  type: DELETE_A_QUESTION,
  question,
});

export const errorQuestion = error => ({
  type: ERROR_QUESTION,
  error,
});

export const requestAllQuestions = () => (dispatch) => {
  return APIUtil.fetchAllQuestions()
    .then(questions => dispatch(receiveAllQuestions(questions)));
};

export const requestAQuestion = id => dispatch => {
  return APIUtil.fetchQuestion(id).then(question =>
    dispatch(receiveAQuestion(question)));
};

export const changeAQuestion = (question) => dispatch => {
  return APIUtil.updateQuestion(question)
    .then(newquestion => {
      dispatch(receiveAQuestion(question));
      return newquestion;
    });
};

export const newQuestion = (question) => dispatch => {
  return APIUtil.createQuestion(question)
  .then(newquestion => {
    dispatch(receiveAQuestion(question));
    return newquestion;
  });
};

export const destroyQuestion = (question) => dispatch => {
  return APIUtil.deleteQuestion(question)
    .then(deleted => {
      dispatch(deleteQuestion(question));
    });

};
