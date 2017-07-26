@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'comment', comment: comment
    json.user comment.user
  end
end
