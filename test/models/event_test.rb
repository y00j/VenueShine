# == Schema Information
#
# Table name: events
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  address            :string           not null
#  description        :text             not null
#  start_date         :date             not null
#  end_date           :date             not null
#  organizer_id       :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
