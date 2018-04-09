class RemoveImageUrlFromEventsTable < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :events, :image_url
  end
end
