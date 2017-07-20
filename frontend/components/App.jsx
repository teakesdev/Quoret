import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './login/greeting_container';
import SessionFormContainer from './login/session_form_container';
import QuestionIndexContainer from './question/question_index_container';
import { AuthRoute, ProtectedRoute } from '../actions/route_actions';

const App = () => (
  <div>

      <h1 className="header1">Quoret</h1>
      
      <Switch>
        <ProtectedRoute exact path="/" component={QuestionIndexContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
