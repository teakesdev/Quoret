class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :question,
  foriegn_key: :question_id,
  primary_key: :id,
  classname: :Question

  belongs_to :user,
  foreign_key: :author_id,
  primary_key: :id,
  classname: :User
end
