import Head from 'next/head'
import React from 'react';
import Lightbox from '../components/lightbox';

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
        </Head>

        <main>
          <div className="App">
            {this.state.showLightbox && <Lightbox parentCallback={this.handleCallback}/>}

            {!this.state.showLightbox && 
              <div className='mainContent' style={{display: 'flex'}}>
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
