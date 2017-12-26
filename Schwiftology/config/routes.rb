Rails.application.routes.draw do
  get 'pages/home'

  get 'about' => "pages#{about}", as: about

  get 'contact' => "pages#{contact}", as: contact

  get 'fanart' => "pages#{fanart}", as: fanart

  get 'videos' => "pages#{videos}", as: videos

  root 'stories#index'

    resources :stories do
      resources :comments
    end

    resources :comments do
      resources :comments
    end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
