import React from 'react';
import { withRouter } from 'react-router';
import CommentIndexItem from './comment_index_item';
import ReplyFormContainer from '../reply/reply_form_container';
import { Link, Route } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount (){
    this.props.requestAllComments();
  }

  comments() {
    if (this.props.question) {

    return this.props.comments.filter( (comment) => {
      return comment.question_id === this.props.question.id;});
    } else {
      return [];
    }
  }


  render() {
    const comments = this.comments().map(comment => (
        <CommentIndexItem key={comment.id} comment={comment} />


    ));
    return (


      <div >
          <h1 className="comment-title">Comments:</h1>
        <div className="comment-comment">

        <ul>{comments}</ul>
      </div>
    </div>

    );
  }
}

export default withRouter(CommentIndex);
