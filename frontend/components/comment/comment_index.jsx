import React from 'react';

import CommentIndexItem from './comment_index_item';

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
      <div>
        <ul>{comments}</ul>
      </div>
    );
  }
}

export default CommentIndex;
