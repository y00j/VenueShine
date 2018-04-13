# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord

  has_attached_file :image, default_url: "https://s3-us-west-1.amazonaws.com/venueshine-dev/events/user-default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true


  after_initialize :ensure_session_token
  attr_reader :password
  
  has_many :ticket_orders

  has_many :organized_events,
    class_name: :Event,
    foreign_key: :organizer_id,
    primary_key: :id

  has_many :tickets,
    through: :ticket_orders,
    source: :ticket
    
  has_many :events,
    through: :tickets, 
    source: :event

  has_many :bookmarks
  
  has_many :bookmarked_events,
    through: :bookmarks,
    source: :event

  


  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil 
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
