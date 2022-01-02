import React, { Component } from 'react'
import styles from './sliderWrapper.module.css'
import SliderContainer from './sliderContainer'
import FluidGallery from 'react-fluid-gallery'


export default class SliderWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeSlide: undefined,
      slideIndex: 0
    }
    this.slides = [ '/assets/image1.jpeg', '/assets/image2.jpeg', '/assets/image3.jpeg']
    this.rootElement = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  handleCallback = (changeSlideValue) => {
    this.setState({changeSlide: changeSlideValue})
  }

  onChange = (slideIndex) => {
    this.setState({slideIndex: slideIndex, changeSlide: undefined})
  }

  render () {
    return (
      <div ref={this.rootElement} className={styles.slider}>
        <SliderContainer
          slideIndex={this.state.slideIndex}
          parentCallback={this.handleCallback}
        />
        <FluidGallery
          changeSlide={this.state.changeSlide}
          onChange={this.onChange}
          style={{ height: '100vh'}}
          slides={this.slides}
        />
      </div>
    )
  }
}