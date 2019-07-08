import { connect } from 'react-redux';
import Carousel from './Carousel';

function mapStateToProps(state) {
  return {
    images: state.images.images
  };
}

export default connect(
  mapStateToProps,
  null
)(Carousel);
