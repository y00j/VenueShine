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

require 'test_helper'

class TicketOrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
