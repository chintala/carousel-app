import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  getImageUrl(image) {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
  }

  render() {
    return (
      <div>
        <img
          className="carousel-image"
          alt={this.props.image.title}
          src={this.getImageUrl(this.props.image)}
        />
      </div>
    );
  }
}

Image.propTypes = {
  image: PropTypes.object
};

export default Image;
