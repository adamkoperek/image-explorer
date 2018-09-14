class CreateDirectories < ActiveRecord::Migration[5.2]
  def change
    create_table :directories do |t|
      t.string :name
      t.string :full_path
      t.integer :parent_id
    end

    add_foreign_key :directories, :directories, column: :parent_id
    create_join_table :directories, :scopes
  end
end
