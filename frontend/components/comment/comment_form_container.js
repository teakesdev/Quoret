import { connect } from 'react-redux';
// import { selectAllPosts } from '../reducers/selectors';
import {  newComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  return {
  question: state.questions.entities[ownProps.match.params.questionId],
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  newComment: comment => dispatch(newComment(comment))
});

const QuestionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

export default QuestionFormContainer;
