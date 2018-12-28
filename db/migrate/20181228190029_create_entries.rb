class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.string :full_name, null: false
      t.string :years_experience, null: false
      t.boolean :good_developer, null: false
      t.string :favorite_language, null: false
      t.text :other_favorites, null: false

      t.timestamps
    end
  end
end
