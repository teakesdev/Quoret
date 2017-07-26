import React from 'react';
import { Link, Route } from 'react-router-dom';
import CommentFormContainer from './comment_form_container';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
      body: "",
      question_id: this.props.match.params.questionId,
      author_id: this.props.currentUser.id
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newComment(this.state);
    console.log(this.props);
    this.props.history.push(`/api/questions/${this.props.question.id}`);
  }


 render() {

   return(
     <form className="form-comment" onSubmit={this.handleSubmit}>
           <h1 className="new-comment">Add A Comment</h1>
           <label>
             <input
               className="comment-input"
               ref="body"
               placeholder="Submit A New Comment Here"
               value={this.state.body}
               onChange={this.update('body')}
               required/>
           </label>
           <button className="new-button">Submit Comment</button>
         </form>
);
  }
}


export default CommentForm;
