class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :address, null: false
      t.string :image_url, null: false
      t.text :description, null: false
      t.integer :tickets_available, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :organizer_id, null: false

      t.timestamps
    end
    add_index :events, :organizer_id
    add_index :events, :title
  end
  
end
