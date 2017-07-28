import {  RECEIVE_ALL_COMMENTS,
          RECEIVE_A_COMMENT,
          DELETE_A_COMMENT  } from '../actions/comment_actions';
import { RECEIVE_A_REPLY } from '../actions/reply_actions';
// import { RECEIVE_A_REPLY, RECEIVE_REPLIES } from '../actions/reply_actions';
import merge from 'lodash/merge';




const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSt;

    switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_A_COMMENT:
      let replies = action.comment.replies;
      const myComment = {[action.comment.id]: action.comment};
      return merge({}, state, myComment);
    case RECEIVE_A_REPLY:
      const oldSt = merge({}, state);
      oldSt[action.reply.comment_id].replies[action.reply.id] = action.reply;
      return oldSt;
    default:
      return state;
  }
};

export default commentReducer;
