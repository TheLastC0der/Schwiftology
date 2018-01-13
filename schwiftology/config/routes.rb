Rails.application.routes.draw do
  devise_for :users
  get '/links', to: 'links#index'
  get '/new', to: 'links#new'
  get '/about', to: 'pages#about'
  
  resources :links

  root to: "pages#home"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
