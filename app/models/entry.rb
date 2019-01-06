class Entry < ApplicationRecord
    serialize :other_favorites, Array

    validates :full_name, presence: true
    validates :favorite_language, presence: true
    validates :years_experience, presence: true
    validates :good_developer, presence: true
end
