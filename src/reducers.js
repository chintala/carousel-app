import { combineReducers } from 'redux';

const INITIAL_STATE = {
  images: []
};

function imagesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_IMAGES_SUCCESS':
      return Object.assign({}, state, {
        images: action.images
      });
    default:
      return state;
  }
}

export default combineReducers({
  images: imagesReducer
});
