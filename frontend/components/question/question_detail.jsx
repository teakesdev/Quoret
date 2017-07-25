import React from 'react';
import { Link } from 'react-router-dom';

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
            </div>
          </section>
      );
    }
}

export default QuestionDetail;
