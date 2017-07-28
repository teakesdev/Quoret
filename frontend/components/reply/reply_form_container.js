import { connect } from 'react-redux';
import {  newReply } from '../../actions/reply_actions';
import ReplyForm from './reply_form';

const mapStateToProps = (state, ownProps ) => {
  return {

  comment: ownProps.props,
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  newReply: reply => dispatch(newReply(reply))
});

const ReplyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyForm);

export default ReplyFormContainer;
