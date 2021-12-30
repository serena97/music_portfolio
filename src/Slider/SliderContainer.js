import React, { Component } from 'react';
import { changeSlideEnum } from 'react-fluid-gallery'

const data = [
  {title: 'Miss You', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {title: 'End Time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {title: 'The Glow Of Beauty', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
]

export default class SliderContainer extends Component {

  constructor(props) {
    super(props)
  }

  onClickNext = () => {
    this.props.parentCallback(changeSlideEnum.next);
  }

  onClickPrev = () => {
    this.props.parentCallback(changeSlideEnum.prev)
  }

  render() {
    const datum = data[this.props.slideIndex]
    return (
      <div className='overlay-slider'>
        <div className='text-area'>
          <h1>{datum.title}</h1>
          <h4>{datum.description}</h4>
        </div>
        <div className='button-area'>
          <button type="button" className='arrow arrow-up btn btn-lg' onClick={this.onClickNext}>
            <span className="glyphicon glyphicon-arrow-up"></span>
          </button>
          <button type="button" className='arrow arrow-down btn btn-lg' onClick={this.onClickPrev}>
            <span className="glyphicon glyphicon-arrow-down"></span>
          </button>
        </div>
        <div>
          <button type="button" className='play'>
            <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>
    )
  }
}