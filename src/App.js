import './App.css';
import React from 'react';
import Lightbox from './Lightbox';
import CreatePost from './Blog/Createpost';
import Posts from './Blog/Posts';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import ShowPost from './Blog/Showpost';
import Pillar from './Pillar/Pillar'
import SliderWrapper from './Slider/SliderWrapper';

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
      <Router>
        <div className="App">
          {this.state.showLightbox && <Lightbox parentCallback={this.handleCallback}/>}

          {!this.state.showLightbox && 
            <div style={{display: 'flex'}}>
              <Pillar/>
              <SliderWrapper/>
            </div>
          }

          {/* <div className="Portfolio">
            <CreatePost/>
            <Posts/>
          </div> */}
        </div>

        <Switch>
          <Route path='/post/:topicId'>
            <ShowPost/>
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
