import './App.css';
import React from 'react';
import Lightbox from './Lightbox';
import CreatePost from './createpost';
import Posts from './posts';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import ShowPost from './showpost';

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
          <div className="Portfolio">
            <CreatePost/>
            <Posts/>
          </div>
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
