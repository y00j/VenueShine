# == Schema Information
#
# Table name: tickets
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  price       :float            not null
#  description :string
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Ticket < ApplicationRecord
  belongs_to :event
  
  has_many :ticket_orders

  has_many :users,
    through: :ticket_orders,
    source: :user 
  
end
