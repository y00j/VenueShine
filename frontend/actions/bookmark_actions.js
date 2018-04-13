import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveBookmark = (id) => ({
  type: RECEIVE_BOOKMARK,
  id: id.eventId
});

const removeBookmark = (id) => ({
  type: REMOVE_BOOKMARK,
  id: id.eventId
});


export const createBookmark = (id) => (dispatch) => (
  APIUtil.createBookmark(id).then(data => dispatch(receiveBookmark(data)))
);

export const deleteBookmark = (id) => (dispatch) => (
  APIUtil.deleteBookmark(id).then(data => dispatch(removeBookmark(data)))
);

export const toggleBookmark = (id) => (dispatch, getState) => {
  const state = getState();
  if (state.session.currentUser.bookmarks.includes(id)) {
    dispatch(deleteBookmark(id));
  } else {
    dispatch(createBookmark(id));
  }
};