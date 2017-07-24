class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id

    if @question.save
      redirect_to "/api/questions"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = Question.find(params[:id])
    # redirect_to "/questions"
    if @question.destroy
      redirect_to "/api/questions"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    # @question = current_user.questions.find(params[:id])
    @question = Question.find(params[:id])
    if @question.update_attributes(question_params)
      render "/api/questions"
    else
      render json: @question.errors.full_messages, status: 422
    end

  end

  private

  def question_params
    params.require(:question).permit(:title)
  end

end
