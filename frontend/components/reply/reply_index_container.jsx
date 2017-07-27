import { connect } from 'react-redux';
import { selectAllReplies } from '../../reducers/selectors';
import { requestAllComments, requestAComment, newComment } from '../../actions/comment_actions';
import AnswerIndex from './comment_index';


const mapStateToProps = (state, OwnProps) => {
  return {replies: selectAllReplies(state),
    // question: state.questions.currentQuestion,
    // question: state.questions[ownProps.answerId],
    comment: OwnProps.props,
    errors: state.errors

  };
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
  requestAComment: (id) => dispatch(requestAComment(id)),
  newComment: (comment) => dispatch(newComment(comment)),
  // destroyComment: (comment) => dispatch(destroyComment(comment))
});

const AnswerIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndex);

export default AnswerIndexContainer;
