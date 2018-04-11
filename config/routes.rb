Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy]
    resources :tickets, only: [:index, :show, :create, :update, :destroy]
    resources :ticket_orders
  end
end
