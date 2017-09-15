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
      <button className="button2" onClick={ () => destroyQuestion(question.id) }>Delete</button></div>);
    }

  }


 render() {

   let { question, destroyQuestion, currentUser } = this.props;

   return (
  <li className="question-index-item">

      <div className="upper">
        <div className="question-divider-internal">
          <img class="profile_photo_img" src="https://qsf.ec.quoracdn.net/-3-images.new_grid.profile_pic_anon_small.png-26-867c1f9ac8eed1ed.png" height="40" alt="Anonymous" width="40"/>
          <div className="author-tag"> by: {question.author_name} </div>
        </div>
          <div className="title-link">
            <Link to={`api/questions/${question.id}`}>
              <div> { question.title } </div>
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
