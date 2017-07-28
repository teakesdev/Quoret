import * as APIUtil from '../util/reply_api_util';

export const RECEIVE_REPLIES = 'RECEIVE_REPLIES';
export const DELETE_A_REPLY = 'DELETE_A_REPLY';
export const RECEIVE_A_REPLY = 'RECEIVE_A_REPLY';

export const receiveReplies = replies => ({
  type: RECEIVE_REPLIES,
  replies,
});

export const receiveAReply = reply => ({
  type: RECEIVE_A_REPLY,
  reply,
});


export const deleteAReply = reply => ({
  type: DELETE_A_REPLY,
  reply,
});

export const requestAllReplies = () => (dispatch) => {
  return APIUtil.fetchAllReplies()
    .then(replies => dispatch(receiveReplies(replies)));
};

export const requestAComment = id => dispatch => {
  return APIUtil.fetchAReply(id).then(reply =>
    dispatch(receiveAReply(reply)));
};

export const newReply = (reply) => dispatch => {
  return APIUtil.addReply(reply)
  .then(newrep => {
    dispatch(receiveAReply(newrep));
  });
};

export const destroyReply = (reply) => dispatch => {
  return APIUtil.deleteReply(reply)
    .then(deleted => {
      dispatch(deleteAReply(deleted));
    });
};
