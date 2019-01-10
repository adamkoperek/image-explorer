Rails.application.routes.draw do

  namespace :ajax do
    delete '/scope_selections', to: 'scope_selections#destroy'
    post '/scope_selections', to: 'scope_selections#create'

    post '/images_tags', to: 'images_tags#create'
    post '/images_tags/delete', to: 'images_tags#destroy'

    resources :directories
    resources :scopes, only: [:index, :create, :destroy]
    resources :images, only: [:index, :show]
  end

  get 'state/index'
  post '/login', to: "sessions#create"

  get 'thumbnails/:id', to: 'thumbnails#show'
  get 'images/:id', to: 'images#show'

end
