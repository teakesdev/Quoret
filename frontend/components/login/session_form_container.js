import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  const processGuest = login;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    processGuest: user => dispatch(processGuest(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
