class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
    add_index :bookmarks, [:user_id, :event_id], unique: true
  end
end
