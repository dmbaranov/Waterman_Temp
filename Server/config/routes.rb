Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/signup' => 'users#create'
      resources :users
      resources :education_centers
      resources :universities
      resources :ports


      get '/login' => 'sessions#new'
      post '/login' => 'sessions#create'
      delete '/logout' => 'sessions#destroy'
    end
  end
end
