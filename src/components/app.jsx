import React, { Component } from 'react';
import Flat from './flat.jsx';
import Flats from '../../data/flats.js';
import GoogleMap from  './google_map.jsx';
import dotenv from 'dotenv';

require('dotenv').config();


import FlatList from './flat_list.jsx';

console.log(process.env.REACT_APP_GOOGLE_API_KEY);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: Flats,
      lat: "",
      lng: ""
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat: lat
    });
    this.setState({
      lng: lng
    });
  }

  render () {
    return (
      <div>
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />


        <div className="map-container">
          <GoogleMap lat={this.state.lat} lng={this.state.lng}/>
        </div>
      </div>
    );
  }
}
export default App;
