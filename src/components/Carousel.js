import React from 'react';
import Image from './Image';
import { PrevButton, NextButton, PlayPauseButton } from './Buttons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      playing: false
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
  }

  handlePrevClick() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1
    }));
  }

  handleNextClick() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1
    }));
  }

  handlePlayPauseClick() {
    if (this.state.playing) {
      if (this.playTimer) {
        clearInterval(this.playTimer);
      }
    } else {
      this.playTimer = setInterval(() => this.play(), 1000);
    }
    this.setState(prevState => ({
      playing: !prevState.playing
    }));
  }

  play() {
    if (
      this.state.currentImage >= 0 &&
      this.state.currentImage < this.props.images.length - 1
    ) {
      this.setState(prevState => ({
        currentImage: prevState.currentImage + 1
      }));
    }
  }

  renderSlide() {
    if (this.props.images) {
      const image = this.props.images[this.state.currentImage];
      if (image) {
        return (
          <div className="carousel-slide">
            <div className="carousel-buttons">
              <PrevButton
                onPrevClick={this.handlePrevClick}
                {...this.props}
                {...this.state}
              ></PrevButton>
              <PlayPauseButton
                onPlayPauseClick={this.handlePlayPauseClick}
                {...this.props}
                {...this.state}
              ></PlayPauseButton>
              <NextButton
                onNextClick={this.handleNextClick}
                {...this.props}
                {...this.state}
              ></NextButton>
            </div>
            <Image image={image} />
          </div>
        );
      }
    }
  }

  render() {
    return <div className="carousel-container">{this.renderSlide()}</div>;
  }
}

export default Carousel;
