import React from 'react';
import ReplyFormContainer from '../reply/reply_form_container';
import { Link, Route } from 'react-router-dom';
import ReplyIndexContainer from '../reply/reply_index_container';


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
             {this.props.comment.user.username}
          </div>
        </div>
        <div className="comment-text">
          {this.props.comment.body}
        </div>
        <div className="comments-container">
          <h2 className="reply-index">
            Replies:
          <br/>
          <br/>
            <ReplyIndexContainer comment={this.props.comment}/>
          </h2>
          <div className="new-comment-form">
            <ReplyFormContainer props={this.props.comment}/>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
