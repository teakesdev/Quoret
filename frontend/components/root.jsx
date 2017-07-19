import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import App from './App';
import SessionFormContainer from './login/session_form_container';
import QuestionIndexContainer from './question/question_index_container';

export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);
