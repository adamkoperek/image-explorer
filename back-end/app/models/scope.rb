class Scope < ApplicationRecord
  belongs_to :user, foreign_key: :owner_id
  # belongs_to :user, foreign_key: :current_scope_id
  has_and_belongs_to_many :directories
end
