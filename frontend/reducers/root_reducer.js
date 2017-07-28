import { combineReducers } from 'redux';

import commentReducer from './comment_reducer';
import SessionReducer from './session_reducer';
import questionReducer from './question_reducer';
import ReplyReducer from './reply_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  questions: questionReducer,
  comments: commentReducer,
  replies: ReplyReducer
});

export default rootReducer;
