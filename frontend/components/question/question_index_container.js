import { connect } from 'react-redux';
import { selectAllQuestions } from '../../reducers/selectors';
import { requestAllQuestions, requestAQuestion, destroyQuestion, newQuestion } from '../../actions/question_actions';
import QuestionIndex from './question_index';


const mapStateToProps = state => {
  return {questions: selectAllQuestions(state),
  errors: state.errors };
};

const mapDispatchToProps = dispatch => ({
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  requestAQuestion: (id) => dispatch(requestAQuestion(id)),
  newQuestion: (question) => dispatch(newQuestion(question)),
  destroyQuestion: (question) => dispatch(destroyQuestion(question))
});

const QuestionIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);

export default QuestionIndexContainer;
