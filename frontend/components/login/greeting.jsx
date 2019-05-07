import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

const personalGreeting = (currentUser, logout) => (
  <form>
  	<hgroup className="header-group">

      <Link to={`/`} className="title-index">¿Quoret?</Link>
      <SearchContainer/>
      <div className="logout-photo">
        <img class="profile_photo_img" src="https://cdn.onlinewebfonts.com/svg/img_87237.png" height="25" alt="Anonymous" width="25"/>
        <button className="btn" to={`/`} onClick={logout}>Log Out {currentUser.username}!</button>
      </div>
  </hgroup>
  </form>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;
