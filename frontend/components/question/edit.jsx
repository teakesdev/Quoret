import React from 'react';
import { Link } from 'react-router-dom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
  this.state = this.props.question[this.props.match.params.questionId];

  this.setTitle = this.setTitle.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  setTitle(event) {
    event.preventDefault();
    let titleN = event.target.value;
    this.setState({ title: titleN });
  }


  handleSubmit(event) {
    this.props.changeAQuestion({
      id: this.props.match.params.questionId,
      title: this.state.title
    });
  }

  render() {
    return (
      <form className="editform">
        <h1 className="questionedit">Edit Your Question</h1>
        <label className="element">
          <input className="login-input2" onChange={this.setTitle} value={this.state.title}></input>
        </label>
        <button className="button">
          <Link onClick={this.handleSubmit} to="/">Update</Link>
        </button>

      </form>
    );
  }
}

export default Edit;
