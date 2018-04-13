class Api::BookmarksController < ApplicationController
  def create
    @bookmark = current_user.bookmarks.create(event_id: params[:event_id])
    render json: { eventId: params[:event_id] }
  end  

  def destroy
    @bookmark = Bookmark.find_by(event_id: params[:event_id], user_id: current_user.id)
    @bookmark.destroy
    render json: { eventId: params[:event_id] }
  end

end
