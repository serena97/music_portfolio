import React from 'react';
import SliderWrapper from '../components/sliderWrapper';
import Lightbox from '../components/lightbox';
import Layout from '../components/layout';

let globalShowLightbox = true;

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLightbox: globalShowLightbox
    }
  }
  
  componentDidMount() {
    globalShowLightbox = false;
  }

  handleCallback = () => {
    this.setState({showLightbox: false})
  }

  render() {
    return (
      <>
      {this.state.showLightbox ?
        <Layout showLightbox>
          <Lightbox parentCallback={this.handleCallback}/>
        </Layout>
      : (
        <Layout>
          <SliderWrapper/>
        </Layout>
      )}
      </>
    )
  }
}
