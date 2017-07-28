class Reply < ApplicationRecord
  validates :body, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User

  belongs_to :comment,
  foreign_key: :comment_id,
  primary_key: :id,
  class_name: :Comment

  def author_name
    self.user.username
  end
  
end
