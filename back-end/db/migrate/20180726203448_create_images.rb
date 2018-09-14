class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :title
      t.string :file_name
      t.integer :directory_id
      t.integer :size

      t.timestamps
    end

    add_foreign_key :images, :directories
  end
end
