import React from 'react';

class Image extends React.Component {
  getImageUrl(image) {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
  }

  render() {
    return (
      <div>
        <img
          className="carousel-image"
          src={this.getImageUrl(this.props.image)}
        />
      </div>
    );
  }
}

export default Image;
