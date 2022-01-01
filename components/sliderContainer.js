import React, { Component } from 'react';
import { changeSlideEnum } from 'react-fluid-gallery'
import styles from './sliderContainer.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
      <div className={styles.slider}>
        <div className={styles['text-area']}>
          <h1>{datum.title}</h1>
          <h4>{datum.description}</h4>
        </div>
        <div className={styles['button-area']}>
          <button type="button" className={`${styles.arrow} ${styles['arrow-up']} btn btn-lg`} onClick={this.onClickNext}>
            <span className={`glyphicon glyphicon-arrow-up ${styles.glyphicon}`}></span>
          </button>
          <button type="button" className={`${styles.arrow} ${styles['arrow-down']} btn btn-lg`} onClick={this.onClickPrev}>
            <span className={`glyphicon glyphicon-arrow-down ${styles.glyphicon}`}></span>
          </button>
        </div>
        <div>
          <button type="button" className={styles.play}>
            <span className={`glyphicon glyphicon-play ${styles['glyphicon-play']}`}></span>
          </button>
        </div>
      </div>
    )
  }
}