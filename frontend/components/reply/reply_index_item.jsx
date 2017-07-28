import React from 'react';
import ReplyFormContainer from '../reply/reply_form_container';
import { Link, Route } from 'react-router-dom';



class ReplyIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const blankReply = {
      author_name: "",
      body: ""
    };
    const reply = this.props.reply || blankReply;
    console.log(reply);
    return(
      <li className="reply-item">
        <div className="author-profile">
          <div className="author-name">
            by: {reply.author_name}
          </div>
        </div>
        <div className="reply-text">
          {reply.body}
        </div>
        <div className="comments-container">

        </div>
      </li>
    );
  }
}

export default ReplyIndexItem;
