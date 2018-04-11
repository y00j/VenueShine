# == Schema Information
#
# Table name: events
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  address            :string           not null
#  description        :text             not null
#  tickets_available  :integer          not null
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

class Event < ApplicationRecord
  has_attached_file :image, default_url: "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/pillars_of_creation.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  
  belongs_to :organizer,
    class_name: :User,
    foreign_key: :organizer_id,
    primary_key: :id

  has_many :tickets


end

