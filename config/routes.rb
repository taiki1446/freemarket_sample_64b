Rails.application.routes.draw do
  devise_for :users
  root to: "items#index"
  get "/sell" , to: "items#sell", as: "sell_items"
  post "/sell",to: "items#exhibit",as: "sell"
end
