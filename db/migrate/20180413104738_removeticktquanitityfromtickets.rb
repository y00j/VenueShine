class Removeticktquanitityfromtickets < ActiveRecord::Migration[5.1]
  def change
    remove_column :tickets, :ticket_quantity
  end
end
