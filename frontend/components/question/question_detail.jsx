import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';

class QuestionDetail extends React.Component {

  componentDidMount() {
      this.props.requestAQuestion(this.props.match.params.questionId);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.match.params.questionId !== nextProps.match.params.questionId) {
        this.props.requestAQuestion(nextProps.match.params.questionId);
      }
    }

    render() {

      const { question } = this.props;
      if (!question) {
        return null;
      }
      return (

          <section className="section-detail">
            <div className="content-detail">
              <h1>Title: {question.title}</h1>
              <h2>Author: {question.author_name}</h2>
              <Link className="comment-button" to={`/question/${question.id}/answer/new`}>Comment</Link>
              <CommentIndexContainer props={question}/>
            </div>
          </section>
      );
    }
}

export default QuestionDetail;
