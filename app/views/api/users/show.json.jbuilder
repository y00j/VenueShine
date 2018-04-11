json.partial! "api/users/user", user: @user
json.attending_events @user.events.uniq
json.hosting_events @user.organized_events.uniq


