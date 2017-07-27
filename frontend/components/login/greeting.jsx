import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

const personalGreeting = (currentUser, logout) => (
  <form>
  	<hgroup className="header-group">

      <SearchContainer/>

        <h1 className="title-index">¿Quoret?</h1>
        <div className="divider">
          <h2 className="header-name">Welcome, {currentUser.username}!</h2>
          <button className="btn" onClick={logout}>Log Out</button>
        </div>
  	</hgroup>
  </form>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;
