import React, { Component } from 'react'
import './Slider.css'

import FluidGallery from 'react-fluid-gallery'

import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';

export default class SliderWrapper extends Component {

  constructor(props) {
    super(props);
    this.width = null;
  }

  componentDidMount() {
    const container = document.querySelector('div.slider')
    console.log(container)
    this.width = window.innerWidth - container.previousElementSibling.offsetWidth;
    container.style.width = this.width + 'px';
  }

  render () {
    return (
      <div className='slider'>
        <FluidGallery
          style={{ height: '100vh' }}
          slides={[ img1, img2, img3]}
        />
      </div>
    )
  }
}