
```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Username"
      email: "email@email.com",
    },
  }
  errors: {
    Auth: [],
    AskQuestionForm: errors: ["body can't be blank"],
    AnswerForm: errors: ["body can't be blank"],
    CommentForm: errors: ["body can't be blank"]    
  },
  questionDetail: {
    id: 1,
    authorId: 1
    title: "Title",
    body: "Body",
    tagIds = [tag1Id, tag2Id]
  }

  questionTags: {
    'question': {
      id: 1,
      tag: 'science'
    }
  }

  questions: {
    1: {      
      'question': {
        title: 'question title',
        body: 'question body',
        author_id: 'authorId',
      },  
    },
  answers: {
      'answer': {
        id: 1,
        body: 'body',
        authorId: 'id',
      },
    },
  },
  comments: {
    1: {    
        id: 'comment1',
        body: 'body',
        author_id: 'author id'
      },

  }
  filter: {
    searchByTitle: "Question Title",
    searchByTagID: 1
  }
}
```
