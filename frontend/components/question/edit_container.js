import { connect } from 'react-redux';
import Edit from './edit';
import { requestAQuestion, changeAQuestion } from '../../actions/question_actions';
import { selectSingleQuestion } from '../../reducers/selectors';

const mapStateToProps = state => ({
  question: state.questions.entities
});

const mapDispatchToProps = (dispatch) => ({
  requestAQuestion: id => dispatch(requestAQuestion(id)),
  changeAQuestion: question => dispatch(changeAQuestion(question))
});

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default EditContainer;
