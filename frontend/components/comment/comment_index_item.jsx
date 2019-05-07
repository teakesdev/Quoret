import React from 'react';
import ReplyFormContainer from '../reply/reply_form_container';
import { Link, Route } from 'react-router-dom';
import ReplyIndexContainer from '../reply/reply_index_container';
import { destroyComment } from '../../actions/comment_actions';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <li className="comment-item">
        <div className="author-profile">
          <img className="profile_photo_img" src="https://cdn.onlinewebfonts.com/svg/img_87237.png" height="50" alt="Anonymous" width="50"></img>
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
