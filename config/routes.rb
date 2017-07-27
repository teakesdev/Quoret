Rails.application.routes.draw do


  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:create, :index, :destroy, :show, :update]
    resources :comments, only: [:create, :index, :destroy, :show, :update]
    resources :replies, only: [:create, :index, :show]
  end




end
