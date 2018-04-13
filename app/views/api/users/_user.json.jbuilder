json.extract! user, :id, :username, :email
json.profile_image asset_path(user.image.url)
json.bookmarks user.bookmarked_event_ids
