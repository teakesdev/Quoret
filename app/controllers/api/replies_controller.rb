class Api::RepliesController < ApplicationController

  def index
    @replies = Reply.includes(:user).all
  end

  def create
    @reply = Reply.new(reply_params)
    # @reply.author_id = current_user.id

    if @reply.save
      # render "api/replies/show"
      render :show
    else
      render json: @reply.errors.full_messages, status: 422
    end
  end

  def show
    @reply = Reply.includes(:user).find(params[:id])
  end

  def destroy
    @reply = Reply.includes(:user).find(params[:id])
    # redirect_to "/replies"
    if @reply.destroy
      render :show
    else
      render json: @reply.errors.full_messages, status: 422
    end
  end

  def update
    # @reply = current_user.replies.find(params[:id])
    @reply = Reply.find(params[:id])
    if @reply.update_attributes(comment_params)
      render :show
    else
      render json: @reply.errors.full_messages, status: 422
    end

  end

  private

  def reply_params
    params.require(:reply).permit(:body, :author_id, :comment_id)
  end

end
