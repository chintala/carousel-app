const GOOGLE_MAPS_API_KEY = 'AIzaSyA6BHAxbt1qdZxw35ubP8-w5NxvT_wubh0';

export function updateAddress(address) {
  return dispatch => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`
    )
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results[0]) {
          dispatch(fetchImages(response.results[0].geometry.location));
        }
      });
  };
}

export function fetchImages(location) {
  return dispatch => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=439078306b832aaca017764e038fc5cb&lat=${location.lat}&lon=${location.lng}&page=1&per_page=5&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'FETCH_IMAGES_SUCCESS',
          images: response.photos.photo
        });
      });
  };
}
