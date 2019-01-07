Types::Entry = GraphQL::ObjectType.define do
    name 'Entry'
  
    field :id, types.ID
    field :full_name, types.String
    field :years_experience, types.String
    field :good_developer, types.Boolean
    field :favorite_language, types.String
    field :other_favorites, types[types.String]
  end
  