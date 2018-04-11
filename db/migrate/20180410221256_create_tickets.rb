class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.string :description
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :tickets, :event_id
  end
end
