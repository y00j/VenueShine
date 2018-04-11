class CreateTicketOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :ticket_orders do |t|
      t.integer :user_id, null: false
      t.integer :ticket_id, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
    add_index :ticket_orders, :user_id
    add_index :ticket_orders, :ticket_id
  end
end
