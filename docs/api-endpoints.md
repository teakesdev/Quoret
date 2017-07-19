#H1 API Endpoints

#H2 HTML

#H3 Root

 - 'GET' '/'

#H3 Users

- 'GET' /users/new
- 'POST' /users
- 'PATCH' /users

#H3 Session

- 'POST' /sessions
- 'DELETE' /sessions

#H2 JSON

- 'GET' /questions
  get questions
  search_params
- 'POST' /questions
  post questions
- 'GET' /questions/id
  get question and answer and comments
- 'PATCH' /questions/id
  edit question
- 'DELETE' /questions/id
  delete question



- 'POST' /questions/questionId/answers
  post new answer

- 'DELETE' /questions/:question_id/answers/:answer_id
  delete an answer


- 'POST' /answers/answer_id/comments
 comment an answer


- 'DELETE' /comments/:id
  delete a comment

- 'GET' /topics
  fetch all topics
- 'GET' /topics/topic_id
  fetch questions with topic
- 'DELETE' /questions/question_id/topics/topic_name
   remove topic from particular question

Index for questions
