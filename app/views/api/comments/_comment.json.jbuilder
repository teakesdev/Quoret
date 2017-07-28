json.extract! comment, :id, :body, :question_id, :author_name

json.replies do
  comment.replies.each do |reply|
    json.set! reply.id do
      json.extract! reply, :id, :body, :author_name, :comment_id
    end
  end
end
