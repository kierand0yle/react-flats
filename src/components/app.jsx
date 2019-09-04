import React, { Component } from 'react';
import Flat from './flat.jsx';
import Flats from '../../data/flats.js';

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
        <div className="flats-left">
          <FlatList flats={this.state.flats} />

        </div>

        <div className="map-right">

        </div>
      </div>
    );
  }
}
export default App;
