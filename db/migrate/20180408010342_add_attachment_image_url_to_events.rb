class AddAttachmentImageUrlToEvents < ActiveRecord::Migration[5.1]
  def self.up
    change_table :events do |t|
      t.attachment :image_url
    end
  end

  def self.down
    remove_attachment :events, :image_url
  end
end
