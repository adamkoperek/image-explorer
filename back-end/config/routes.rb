Rails.application.routes.draw do

  namespace :ajax do

    delete '/scope_selections', to: 'scope_selections#destroy'
    post '/scope_selections', to: 'scope_selections#create'

    resources :directories
    resources :scopes, only: [:index, :create, :destroy]
  end

  get 'state/index'
  post '/login', to: "sessions#create"

end
