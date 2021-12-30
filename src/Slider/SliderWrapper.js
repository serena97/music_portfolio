import React, { Component } from 'react'
import './Slider.css'

import FluidGallery from 'react-fluid-gallery'

import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';
import SliderContainer from './SliderContainer';

export default class SliderWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeSlide: undefined,
      slideIndex: 0
    }
    this.slides = [ img1, img2, img3]
    this.width = null;
    this.setSliderWidth = this.setSliderWidth.bind(this)
    this.onChange = this.onChange.bind(this);
    this.sliderContainer = React.createRef();
  }

  setSliderWidth() {
    const container = document.querySelector('div.slider')
    console.log(container)
    this.width = window.innerWidth - container.previousElementSibling.offsetWidth;
    container.style.width = this.width + 'px';
  }

  componentDidMount() {
    this.setSliderWidth()
    window.addEventListener('resize', () => {
      this.setSliderWidth()
    })
  }

  handleCallback = (changeSlideValue) => {
    this.setState({changeSlide: changeSlideValue})
  }

  onChange = (slideIndex) => {
    this.setState({slideIndex: slideIndex, changeSlide: undefined})
  }

  render () {
    return (
      <div className='slider'>
        <SliderContainer
          ref={this.sliderContainer}
          slideIndex={this.state.slideIndex}
          parentCallback={this.handleCallback}
        />
        <div className='overlay2'>
          <FluidGallery
            changeSlide={this.state.changeSlide}
            onChange={this.onChange}
            style={{ height: '100vh'}}
            slides={this.slides}
          />
        </div>
      </div>
    )
  }
}