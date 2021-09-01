import './App.css';
import React from 'react';
import Lightbox from './Lightbox';

class App extends React.Component {

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
      <div className="App">
        {this.state.showLightbox && <Lightbox parentCallback={this.handleCallback}/>}
        <div className="Portfolio">
        </div>
      </div>
    );
  }
}


export default App;
