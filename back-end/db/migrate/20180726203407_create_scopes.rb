class CreateScopes < ActiveRecord::Migration[5.2]
  def change
    
    create_table :scopes do |t|
      t.string :name
      t.integer :owner_id
    end

    add_column :users, :current_scope_id, :integer
    add_foreign_key :users, :scopes, column: :current_scope_id

    add_foreign_key :scopes, :users, column: :owner_id

  end
end
