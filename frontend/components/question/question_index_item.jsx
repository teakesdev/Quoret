import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionDetailContainer from './question_detail_container';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



 render() {
   let {questions, destroyQuestion } = this.props;
   return(
  <li className="question-index-item">
        <Link to={`/questions/${questions.id}`}>
          <div> { questions.title } </div>
        </Link>
        <div className="knob">
          <button className="button">
            <Link to={`questions/edit/${questions.id}`}>Edit</Link>
          </button>
          <button className="button" onClick={ () => destroyQuestion(questions.id) }>Delete</button>
        </div>
        <Route path={`/questions/${questions.id}`} component={QuestionDetailContainer}/>

  </li>
);
  }
}


export default QuestionIndexItem;
