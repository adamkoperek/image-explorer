class Directory < ApplicationRecord
  has_many :images
  has_one :directory, foreign_key: :parent_id
  has_and_belongs_to_many :scopes
end
