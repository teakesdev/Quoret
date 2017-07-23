import { connect } from 'react-redux';
// import { selectAllPosts } from '../reducers/selectors';
import { requestAllQuestions, requestAQuestion, destroyQuestion, newQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = ({ errors, title }) => ({
  errors,
  title
});

const mapDispatchToProps = (dispatch) => ({
  newQuestion: question => dispatch(newQuestion(question))
});

const QuestionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);

export default QuestionFormContainer;
