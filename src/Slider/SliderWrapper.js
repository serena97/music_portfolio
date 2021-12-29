import React, { Component } from 'react'
import './Slider.css'

import FluidGallery, { changeSlideEnum } from 'react-fluid-gallery'

import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';

export default class SliderWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeSlide: undefined
    }
    this.width = null;
    this.setSliderWidth = this.setSliderWidth.bind(this)
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
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

  onClickPrev = () => {
    this.setState({changeSlide: changeSlideEnum.prev});
  }

  onClickNext = () => {
    this.setState({changeSlide: changeSlideEnum.next});
  }

  render () {
    return (
      <div className='slider'>
        <button type="button" class='arrow arrow-up btn btn-lg' onClick={this.onClickNext}>
          <span class="glyphicon glyphicon-arrow-up"></span>
        </button>
        <button type="button" class='arrow arrow-down btn btn-lg' onClick={this.onClickPrev}>
          <span class="glyphicon glyphicon-arrow-down"></span>
        </button>
        <FluidGallery
          changeSlide={this.state.changeSlide}
          style={{ height: '100vh'}}
          slides={[ img1, img2, img3]}
        />
      </div>
    )
  }
}