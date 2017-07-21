import {  RECEIVE_ALL_QUESTIONS,
          RECEIVE_A_QUESTION,
          DELETE_A_QUESTION  } from '../actions/question_actions';
import merge from 'lodash/merge';

const defaultState = {
  entities: {},
  current_question: null
};

const questionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newSt;

    switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, { entities: action.questions });
    case RECEIVE_A_QUESTION:
      const myQuestion = action.question;
      return merge({}, state, {
          entities: { [myQuestion.id]: myQuestion },
          current_question: myQuestion.id
        });
    case DELETE_A_QUESTION:
      newSt = merge({}, state);
      delete newSt.entities[action.question.id];
      return newSt;
    default:
      return state;
  }
};

export default questionReducer;
