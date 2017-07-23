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
      const { questions, newQuestion, destroyQuestion, errors } = this.props;
      return (
        <div>
          <section className="question-section">
            <ul>
              { questions.map(question =>
                 <QuestionIndexItem key={question.id} questions={question} destroyQuestion={destroyQuestion} />) }
            </ul>
            <Route className="create-questions" exact path='/' component={QuestionFormContainer} />

          </section>
        </div>
      );
    }
  }



export default QuestionIndex;
