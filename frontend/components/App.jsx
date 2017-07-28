import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './login/greeting_container';
import SessionFormContainer from './login/session_form_container';
import QuestionIndexContainer from './question/question_index_container';
import { AuthRoute, ProtectedRoute } from '../actions/route_actions';
import EditContainer from './question/edit_container';
import QuestionDetailContainer from './question/question_detail_container';
import CommentFormContainer from './comment/comment_form_container';
import CommentIndexContainer from './comment/comment_index_container';

const App = () => (
  <div className="main-back">

    <header>

      <GreetingContainer />
    </header>


      <Switch>
        <ProtectedRoute exact path={`/api/comments/:commentId`} component={CommentIndexContainer}/>
        <ProtectedRoute exact path={`/api/questions/:questionId`} component={QuestionDetailContainer}/>
        <ProtectedRoute exact path="/" component={QuestionIndexContainer} />
        <ProtectedRoute exact path="/question/:questionId/answer/new" component={CommentFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute exact path={`/questions/edit/:questionId`} component={EditContainer} />
      </Switch>
  </div>
);

export default App;
