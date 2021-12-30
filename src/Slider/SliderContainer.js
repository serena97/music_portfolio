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
    this.state = {
      slideIndex: 0
    }
    this.updateSlideIndex = this.updateSlideIndex.bind(this)
  }

  updateSlideIndex(index) {
    this.setState({slideIndex: index})
  }

  onClickNext = () => {
    this.props.parentCallback(changeSlideEnum.next);
  }

  onClickPrev = () => {
    this.props.parentCallback(changeSlideEnum.prev)
  }

  render() {
    const datum = data[this.state.slideIndex]
    return (
      <div className='overlay-slider'>
        <div className='text-area'>
          <h3>{datum.title}</h3>
          <p>{datum.description}</p>
        </div>
        <div className='button-area'>
          <button type="button" class='arrow arrow-up btn btn-lg' onClick={this.onClickNext}>
            <span class="glyphicon glyphicon-arrow-up"></span>
          </button>
          <button type="button" class='arrow arrow-down btn btn-lg' onClick={this.onClickPrev}>
            <span class="glyphicon glyphicon-arrow-down"></span>
          </button>
        </div>
      </div>
    )
  }
}