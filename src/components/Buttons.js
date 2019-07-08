import React from 'react';
import classnames from 'classnames';

export class PrevButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onPrevClick();
  }

  render() {
    let prevClasses = { 'carousal-prev': true };
    let prevArrowProps = {
      className: classnames(prevClasses),
      onClick: this.handleClick
    };
    if (this.props.currentImage === 0) {
      prevArrowProps['disabled'] = true;
    }
    return (
      <button type="button" {...prevArrowProps}>
        {' '}
        Previous
      </button>
    );
  }
}

export class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onNextClick();
  }

  render() {
    let nextClasses = { 'carousal-next': true };
    let nextArrowProps = {
      className: classnames(nextClasses),
      onClick: this.handleClick
    };
    if (this.props.currentImage === this.props.images.length - 1) {
      nextArrowProps['disabled'] = true;
    }
    return (
      <button type="button" {...nextArrowProps}>
        {' '}
        Next
      </button>
    );
  }
}

export class PlayPauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onPlayPauseClick();
  }

  render() {
    let playClasses = { 'carousal-play': true };
    let playProps = {
      className: classnames(playClasses),
      onClick: this.handleClick
    };
    return (
      <button type="button" {...playProps}>
        {this.props.playing ? 'Pause' : 'Play'}
      </button>
    );
  }
}
