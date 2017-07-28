import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

const personalGreeting = (currentUser, logout) => (
  <form>
  	<hgroup className="header-group">

      <SearchContainer/>

        <Link to={`/`} className="title-index">¿Quoret?</Link>
        <div className="divider">
          <h2 className="header-name"></h2>
          <button className="btn" onClick={logout}>Log Out {currentUser.username}!</button>
        </div>
  	</hgroup>
  </form>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;
