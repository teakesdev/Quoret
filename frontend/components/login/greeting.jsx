import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from '../root';
import SessionForm from './session_form';

const Greeting = (props) => {
  const isLoggedIn = props.currentUser;
  if (isLoggedIn) {
    return <Redirect to="/"/>;
  } else {
    return <Redirect to="/session"></Redirect>;
  }
};



export default Greeting;
