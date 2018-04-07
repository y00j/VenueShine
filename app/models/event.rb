# == Schema Information
#
# Table name: events
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  address           :string           not null
#  image_url         :string           not null
#  description       :text             not null
#  tickets_available :integer          not null
#  start_date        :date             not null
#  end_date          :date             not null
#  organizer_id      :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Event < ApplicationRecord
  belongs_to :organizer,
    class_name: :User,
    foreign_key: :organizer_id
end

