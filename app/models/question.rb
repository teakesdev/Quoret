class Question < ApplicationRecord
  validates :title, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User

  def author_name
    self.user.username
  end

end
