import {  RECEIVE_ALL_COMMENTS,
          RECEIVE_A_COMMENT,
          DELETE_A_COMMENT  } from '../actions/comment_actions';
import merge from 'lodash/merge';


const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSt;

    switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_A_COMMENT:
      const myComment = {[action.comment.id]: action.comment};
      return merge({}, state, myComment);
    // case DELETE_A_COMMENT:
    //   newSt = merge({}, state);
    //   delete newSt.entities[action.comment.id];
    //   return newSt;
    default:
      return state;
  }
};

export default commentReducer;
