import { connect } from 'react-redux';
import { selectAllComments } from '../../reducers/selectors';
import { requestAllComments, requestAComment, newComment, destroyComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';


const mapStateToProps = (state, OwnProps) => {
  return {comments: selectAllComments(state),
    question: OwnProps.props,
    errors: state.errors

  };
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
  requestAComment: (id) => dispatch(requestAComment(id)),
  newComment: (comment) => dispatch(newComment(comment)),
  destroyComment: (comment) => dispatch(destroyComment(comment))
});

const CommentIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);

export default CommentIndexContainer;
