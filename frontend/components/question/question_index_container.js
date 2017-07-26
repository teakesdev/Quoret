import { connect } from 'react-redux';
import { selectAllQuestions, selectAllComments } from '../../reducers/selectors';
import { requestAllQuestions, requestAQuestion, destroyQuestion, newQuestion } from '../../actions/question_actions';
import QuestionIndex from './question_index';
import { requestAllComments } from '../../actions/comment_actions';


const mapStateToProps = state => {
  return {questions: selectAllQuestions(state),
    comments: selectAllComments(state),
  errors: state.errors,
  currentUser: state.session.currentUser.username
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  requestAllComments: () => dispatch(requestAllComments),
  requestAQuestion: (id) => dispatch(requestAQuestion(id)),
  newQuestion: (question) => dispatch(newQuestion(question)),
  destroyQuestion: (question) => dispatch(destroyQuestion(question))
});

const QuestionIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);

export default QuestionIndexContainer;
