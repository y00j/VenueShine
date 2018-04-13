# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookmark < ApplicationRecord
  validates :user_id, uniqueness: { scope: :event_id,
    message: "only one bookmark per event" }
    
  belongs_to :user
  belongs_to :event
end
