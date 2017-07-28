import { RECEIVE_A_REPLY, RECEIVE_REPLIES } from '../actions/reply_actions';
import { merge } from 'lodash';

const ReplyReducer = (inititalState = [], action) => {
  switch (action.type) {
    case RECEIVE_REPLIES:
      return merge([], inititalState, action.replies);
    case RECEIVE_A_REPLY:
      return([
        ...inititalState,
        action.reply
      ]);
    default:
      return inititalState;
  }
};

export default ReplyReducer;
