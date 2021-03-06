Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  post '/graphql', to: 'graphql#execute'
  get '/', to: 'questionnaire#index'
  get '/*path', to: 'questionnaire#index'
  post '/questionnaire', to: 'questionnaire#insert_questionnaire'
  post '/admin', to: 'admin#authorize'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
