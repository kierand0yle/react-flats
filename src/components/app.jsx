import React, { Component } from 'react';
import Flat from './flat.jsx';
import Flats from '../../data/flats.js';
import GoogleMap from  './google_map.jsx';

import FlatList from './flat_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: Flats,
      selectedFlat: ""
    };
  }

  render () {
    return (
      <div>
          <FlatList flats={this.state.flats} />


        <div className="map-container">
          <GoogleMap />
        </div>
      </div>
    );
  }
}
export default App;
