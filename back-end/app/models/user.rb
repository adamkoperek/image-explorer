class User < ApplicationRecord
  has_secure_password
  has_many :scopes, foreign_key: :owner_id
  has_one :scope, foreign_key: :current_scope_id
end
