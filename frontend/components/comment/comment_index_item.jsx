import React from 'react';

import { Link } from 'react-router-dom';



class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <li className="comment-item">
        <div className="author-profile">
          <img className="profile_photo_img" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_anon_small.png-26-867c1f9ac8eed1ed.png" height="50" alt="Anonymous" width="50"></img>
          <div className="author-name">
            by: {this.props.comment.user.username}
          </div>
        </div>
        <div className="comment-text">
          {this.props.comment.body}
        </div>
        <div className="comments-container">
          <div className="new-comment-form">
            <input className="comment-input" type="text" placeholder="Add a reply..."></input>
            <button className="comment-submit">Submit</button>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
