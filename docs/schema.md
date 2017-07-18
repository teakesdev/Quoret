# H1 Users

| name | data | validate
|  id  |  t.integer | notNull unique
| username| t.string | notNull unique
| password_digest | t.string | notNull
| session_token | t.string |notNull

# H1 Tags

| id | t.integer | notNull unique
| tag_name | t.string | notNull unique

# Tagging questions join table

# H1 questions

| id | t.integer | notNull unique
|title | t.string | notNull
| body | t.text |
|author_id | t.integer | notNull

# H1 answers

| id | t.integer | notNull unique
| question_id | t.integer| notNull
| body | t.integer |
| author_id |t.integer |notNull

# H1 comments

| id | t.integer | notNull unique
| comment_id | t.int |notNull
| body | t.text |
| author_id |t.integer | notNull
