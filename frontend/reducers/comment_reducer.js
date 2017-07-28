import {  RECEIVE_ALL_COMMENTS,
          RECEIVE_A_COMMENT,
          DELETE_A_COMMENT  } from '../actions/comment_actions';

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
    // case DELETE_A_COMMENT:
    //   newSt = merge({}, state);
    //   delete newSt.entities[action.comment.id];
    //   return newSt;
    // case RECEIVE_REPLIES:
    //   const myReply = {[action.reply.comment_id]: reply.comment}
    //   return merge({}, state, myReply);
    // case RECEIVE_A_REPLY:
    //   let reply = action.reply;
    //     newSt[reply.comment_id].comments[reply.comment_id].replies[reply.id] = reply;
    //   return merge({}, newSt, defaultState);
    default:
      return state;
  }
};

export default commentReducer;
