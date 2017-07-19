# H1 Users

| name | data | validate
|  id  |  t.integer | notNull unique
| username| t.string | notNull unique
| password_digest | t.string | notNull
| session_token | t.string |notNull

# H1 Tags
name | format | validations
--------|--------------|-----------
| id | t.integer | notNull unique
| tag_name | t.string | notNull unique

# Tagging questions join table

# H1 questions

name | format | validations
--------|--------------|-----------
| id | t.integer | notNull unique
|title | t.string | notNull
|author_id | t.integer | notNull

# H1 answers

name | format | validations
--------|--------------|-----------
| id | t.integer | notNull unique
| question_id | t.integer| notNull
| author_id |t.integer |notNull

# H1 comments

name | format | validations
--------|--------------|-----------
| id | t.integer | notNull unique
| comment_id | t.int |notNull
| author_id |t.integer | notNull
