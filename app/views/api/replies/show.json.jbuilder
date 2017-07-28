json.partial! 'api/replies/reply', reply: @reply
json.user @reply.user

# json.replies do
#   @comment.replies.order(:created_at).each do |reply|
#     json.set! reply.id do
#       json.extract! reply, :id, :body, :created_at
#       json.user do
#         json.extract! reply.user, :id, :username
#       end
#     end
#   end
# end
