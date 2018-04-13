# == Schema Information
#
# Table name: tickets
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  price           :float            not null
#  description     :string
#  event_id        :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  ticket_quantity :integer          not null
#

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
