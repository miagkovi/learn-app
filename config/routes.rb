Rails.application.routes.draw do
  resources :tasks
  root to: 'application#spa'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
