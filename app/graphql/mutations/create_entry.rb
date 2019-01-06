class Mutations::CreateEntry < GraphQL::Schema::RelayClassicMutation
    null true
  
    argument :entry, EntryType, required: true
  
    field :errors, [String], null: false
  
    def resolve(entry:)
      begin
        Entry.create!(entry)
  
        {
          errors: []
        }
      rescue => e
        {
          errors: [e.message]
        }
      end
    end
  end