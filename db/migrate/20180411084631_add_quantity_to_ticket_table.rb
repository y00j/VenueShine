class AddQuantityToTicketTable < ActiveRecord::Migration[5.1]
  def change
    add_column :tickets, :ticket_quantity, :integer, null: false
  end
end
