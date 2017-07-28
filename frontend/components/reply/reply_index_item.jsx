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
      body: "Be the first to add a reply..."
    };
    const reply = this.props.reply || blankReply;
    console.log(reply);
    return(
      <li className="reply-item">
        <div className="author-profile">
          <div className="author-name">
            {reply.author_name}:
            <br/>
          </div>
        </div>
        <div className="reply-text">
          {reply.body}
        </div>
      </li>
    );
  }
}

export default ReplyIndexItem;
