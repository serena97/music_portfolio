import Head from 'next/head'
import React from 'react';
import Lightbox from '../components/lightbox';
import Pillar from '../components/pillar';
import SliderWrapper from '../components/sliderWrapper';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLightbox: true,
    }
  }
  
  handleCallback = () => {
    this.setState({showLightbox: false})
  }

  render() {
    return (
      <div>
        <Head>
          <title>GRACE</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/assets/fonts/CormorantGaramond/CormorantGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
        </Head>

        <main>
          <div className="App">
            {this.state.showLightbox && <Lightbox parentCallback={this.handleCallback}/>}

            {!this.state.showLightbox && 
              <div className='mainContent'>
                <Pillar/>
                <SliderWrapper/>
              </div>
            }

            <div id="logo">
              <h1 className="logo__text">
                GRACE
              </h1>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
