# == Schema Information
#
# Table name: ticket_orders
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  ticket_id  :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TicketOrder < ApplicationRecord
  validates :user_id, :ticket_id, :quantity, presence: true

  belongs_to :user
  belongs_to :ticket

end
