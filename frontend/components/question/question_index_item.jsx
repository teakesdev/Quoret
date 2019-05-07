import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.editPermission = this.editPermission.bind(this);
  }


  editPermission(question, currentUser, destroyQuestion) {
    if (currentUser === question.author_name) {

      return (<div className="knob"><button className="button1">
        <Link to={`questions/edit/${question.id}`}>Edit</Link>
      </button>
      <button className="button1" onClick={ () => destroyQuestion(question.id) }>Delete</button></div>);
    }

  }


 render() {

   let { question, destroyQuestion, currentUser } = this.props;

   return (
  <li className="question-index-item">
      <div className="divider-question">
        <div className="question-divider-internal">
          <img className="img_item" src="https://cdn.onlinewebfonts.com/svg/img_87237.png" height="40" alt="Anonymous" width="40" margin="5px"/>
          <div className="author-tag"> by: {question.author_name} </div>
        </div>
          <div className="title-link">
            <Link to={`/questions/${question.id}`}>
              <div className="title-main"> { question.title } </div>
            </Link>
          </div>
      </div>

          <div>{ this.editPermission(question, currentUser, destroyQuestion) }</div>


        <Route path={`questions/${question.id}`} component={QuestionDetailContainer}/>
  </li>
);
  }
}


export default QuestionIndexItem;
