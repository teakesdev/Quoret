
```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Username"
    },
  }
  errors: {
    Auth: [],
    AskQuestionForm: ["body can't be blank"],
    AnswerForm: ["body can't be blank"],
    CommentForm: ["body can't be blank"]    
  },

  tags: {
    1: {
      id: 1,
      tag: 'science'
    }
  }

  questions: {
    entities: {
      1: {
          id: 1,
          title: 'question title',
          body: 'question body',
          authorId: 1,
          tagIds = [tag1Id, tag2Id]
        } ,
      },
    currentQuestion: 1,
    },
  answers: {
      1: {
        id: 1,
        body: 'body',
        authorId: 1,
        comments: [{id: 'comment1',
        body: 'body',
        author_id: 'author id'}]
      },
    },
  },
}
```
