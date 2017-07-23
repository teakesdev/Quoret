import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionFormContainer from './question_form_container';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newQuestion(this.state);
    this.setState({
      title: "",
      // tags: []
    });
  }


 render() {

   return(
     <form className="form-question" onSubmit={this.handleSubmit}>
           <h1 className="new-question">New Question</h1>
           <label>Title:
             <input
               className="input"
               ref="title"
               value={this.state.title}
               placeholder="Title"
               onChange={this.update('title')}
               required/>
           </label>
           <button className="new-button">New Post</button>
         </form>
);
  }
}


export default QuestionForm;
