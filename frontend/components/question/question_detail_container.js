import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import { requestAQuestion } from '../../actions/question_actions';
import { selectSingleQuestion } from '../../reducers/selectors';



const mapStateToProps = ( state, { match }) => {
  const questionId = parseInt(match.params.questionId);
  const question = selectSingleQuestion(state.questions.entities, match.params.questionId);
  return {
    questionId,
    question
  };
};

const mapDispatchToProps = dispatch => ({
  requestAQuestion: id => dispatch(requestAQuestion(id))
});

const QuestionDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);

export default QuestionDetailContainer;
