@replies.each do |reply|
  json.set! reply.id do
    json.partial! 'reply', reply: reply
    json.user reply.user
  end
end
