import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLink = (action, route) => {
//
// };
//
// const sessionLinks = (action) => (
//   <nav className="login-signup">
//     <div onClick={sessionLink(action,'/login')}>Login</div>
//     &nbsp;or&nbsp;
//     <div onClick={sessionLink(action, '/signup')}>Sign up!</div>
//   </nav>
// );

const personalGreeting = (currentUser, logout) => (
  <form>
  	<hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="btn" onClick={logout}>Log Out</button>
      <input className="login-input" type="test"/>
      <button  onClick={logout}>Search</button>
  	</hgroup>
  </form>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;
