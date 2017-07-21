import { connect } from 'react-redux';
// import { selectAllPosts } from '../reducers/selectors';
// import { requestAllQuestions, requestAQuestion, destroyQuestion, newQuestion } from '../actions/question_actions';
import QuestionIndex from './question_index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const QuestionIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);

export default QuestionIndexContainer;
