# H1 Component Hierarchy

# H2 Application

**MAIN APP**

  **Header**

    - Header

    - HeaderContainer

  **SideBar**

    - SidebarContainer

    - Sidebar

    - Categories

  **Feed**

    - FeedContainer

    - FeedIndex

    -FeedIndexItem

  **Question/SearchBar**

    - QuestionBar

    - QuestionBarContainer

  **Question Form**

    - QuestionContainer

    - QuestionForm

  **Answer Form**

    - AnswerContainer

    - AnswerForm

  **Auth Form**

    - AuthContainer

    - AuthForm

    - AuthErrors

  **Comment Form**
    - CommentIndex

    - CommentIndexContainer

    - CommentForm

  **QuestionIndex**

    - QuestionIndexContainer

    - QuestionIndexItem


# H2 Routes

| Path    |  Component  |
|   "/"   |    "Root"     |
|   "/signin/up"     |    "AuthFormContainer"     |
|  "/questions/questionid"    |  "QuestionDetailContainer" |
| categories/categoryname
