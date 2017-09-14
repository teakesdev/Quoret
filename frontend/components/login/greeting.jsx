import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

const personalGreeting = (currentUser, logout) => (
  <form>
  	<hgroup className="header-group">

      <Link to={`/`} className="title-index">¿Quoret?</Link>
      <SearchContainer/>
      <div className="logout-photo">
        <button className="btn" to={`/`} onClick={logout}>Log Out {currentUser.username}!</button>
        <img class="profile_photo_img" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_anon_small.png-26-867c1f9ac8eed1ed.png" height="50" alt="Anonymous" width="50"/>
      </div>
  </hgroup>
  </form>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;
