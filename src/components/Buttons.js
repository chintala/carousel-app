import React from 'react';
import PropTypes from 'prop-types';

export class PrevButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onPrevClick();
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.handleClick}
        disabled={this.props.currentImage === 0}
      >
        Previous
      </button>
    );
  }
}

PrevButton.propTypes = {
  onPrevClick: PropTypes.func,
  currentImage: PropTypes.number
};

export class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onNextClick();
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.handleClick}
        disabled={this.props.currentImage === this.props.images.length - 1}
      >
        {' '}
        Next
      </button>
    );
  }
}

NextButton.propTypes = {
  onNextClick: PropTypes.func,
  images: PropTypes.array,
  currentImage: PropTypes.number
};

export class PlayPauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onPlayPauseClick();
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        {this.props.playing ? 'Pause' : 'Play'}
      </button>
    );
  }
}

PlayPauseButton.propTypes = {
  onPlayPauseClick: PropTypes.func,
  playing: PropTypes.bool
};
