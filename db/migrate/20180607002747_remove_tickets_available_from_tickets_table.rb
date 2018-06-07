class RemoveTicketsAvailableFromTicketsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :tickets_available, :integer
  end
end
