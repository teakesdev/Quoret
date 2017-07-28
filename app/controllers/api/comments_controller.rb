class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user, :replies).all

  end

  def create
    @comment = Comment.new(comment_params)
    # @comment.author_id = current_user.id

    if @comment.save
    @comment = Comment.includes(:user, :replies).find(@comment.id)
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.includes(:user, :replies).find(params[:id])
  end

  def destroy
    @comment = Comment.includes(:user, :replies).find(params[:id])
    # redirect_to "/comments"
    if @comment.destroy
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    # @comment = current_user.comments.find(params[:id]

    @comment = Comment.includes(:replies, :user).find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :question_id)
  end

end
