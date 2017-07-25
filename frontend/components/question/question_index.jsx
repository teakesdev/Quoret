import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionIndexContainer from './question_index_container';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from './question_form_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.requestAllQuestions();
    }


    render() {
      const { questions, newQuestion, destroyQuestion, errors, currentUser } = this.props;
      return (
        <div>
          <section className="question-section">
            <Route className="create-questions" exact path='/' component={QuestionFormContainer} />
            <ul className="question-list">
              { questions.reverse().map(question =>
                 <QuestionIndexItem key={question.id} question={question} currentUser={currentUser} destroyQuestion={destroyQuestion} />) }
            </ul>


          </section>
        </div>
      );
    }
  }



export default QuestionIndex;
