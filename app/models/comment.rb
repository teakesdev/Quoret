class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :question,
  foreign_key: :question_id,
  primary_key: :id,
  class_name: :Question

  belongs_to :user,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User
end
