class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user).all
  end

  def create
    @comment = Comment.new(question_params)
    @comment.author_id = current_user.id

    if @comment.save
      # render "api/comments/show"
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.includes(:user).find(params[:id])
  end

  def destroy
    @comment = Comment.includes(:user).find(params[:id])
    # redirect_to "/comments"
    if @comment.destroy
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    # @comment = current_user.comments.find(params[:id])
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(question_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private

  def question_params
    params.require(:comment).permit(:body)
  end

end
