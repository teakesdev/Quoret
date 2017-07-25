import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root';
import {fetchAllQuestions,
        fetchQuestion,
        updateQuestion,
        createQuestion,
        deleteQuestion}
        from './util/question_api_util.js';
import { requestAQuestion,
         requestAllQuestions,
         receiveAQuestion,
         newQuestion } from './actions/question_actions';


  window.fetchAllQuestions = fetchAllQuestions;
  window.updateQuestion = updateQuestion;
  window.fetchQuestion = fetchQuestion;
  window.createQuestion = createQuestion;
  window.deleteQuestion = deleteQuestion;
  window.requestAllQuestions = requestAllQuestions;
  window.requestAQuestion = requestAQuestion;
  window.receiveAQuestion = receiveAQuestion;
  window.newQuestion = newQuestion;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  ReactDOM.render(<Root store={ store }/>, root);
});
