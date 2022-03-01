import React, { Component } from 'react'
import styles from './sliderWrapper.module.css'
import SliderContainer from './sliderContainer'
import FluidGallery from 'react-fluid-gallery'
import YoutubeEmbed from './youtubeEmbed';


export default class SliderWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeSlide: undefined,
      slideIndex: 0,
      playVideo: false,
      embedId: undefined
    }
    this.slides = [ '/assets/image1.jpeg', '/assets/image2.jpeg', '/assets/image3.jpeg']
    this.onChange = this.onChange.bind(this);
  }

  handleCallback = (changeSlideValue) => {
    this.setState({changeSlide: changeSlideValue})
  }

  onChange = (slideIndex) => {
    this.setState({slideIndex: slideIndex, changeSlide: undefined})
  }

  closeVideo = () => {
    this.setState({playVideo: false})
  }

  playVideo = (embedId) => {
    // determine screen width
    if(screen.width > 640) {
      this.setState({playVideo: true})
      this.setState({embedId})
    } else {
      const url = 'https://youtu.be/' + embedId
      window.open(url, '_blank').focus();
    }
  }

  render () {
    return (
      <>
        {this.state.playVideo ? (
          <>
          <div className={`${styles['play-video-overlay']}`}></div>
          <button type="button" class={`${styles['btn-close']}`} aria-label="Close" onClick={this.closeVideo}></button>
          <YoutubeEmbed embedId={this.state.embedId} />
          </>
        ) : <></>}
          <div className={styles.slider}>
            <div className={`${styles['normal-overlay']}`}></div>
            <SliderContainer
              slideIndex={this.state.slideIndex}
              parentCallback={this.handleCallback}
              playVideo={this.playVideo}
            />
            <FluidGallery
              changeSlide={this.state.changeSlide}
              onChange={this.onChange}
              style={{ height: '100vh'}}
              slides={this.slides}
            /> 
          </div>
      </>
    )
  }
}