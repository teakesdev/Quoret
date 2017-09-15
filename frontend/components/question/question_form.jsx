import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionFormContainer from './question_form_container';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
      title: ""
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.resetForm = this.resetForm.bind(this);
  }
  update(property) {
    return event => this.setState({[property]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newQuestion(this.state);
    this.resetForm();
  }

  resetForm() {
    // e.preventDefault();
    this.setState({
      title: ""
    }, () => {
      console.log(this.state);
    });
  }


 render() {

   return(
     <form className="form-question" onSubmit={this.handleSubmit}>
           <h1 className="new-question"></h1>
           <div className="search-box">
             <input
               className="login-input2"
               ref="title"
               value={this.state.title}
               placeholder="Submit A New Rhetorical Question"
               onChange={this.update('title')}
               required/>
           </div>
         </form>
);
  }
}


export default QuestionForm;
