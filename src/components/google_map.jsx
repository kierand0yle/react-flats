import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

require('dotenv').config();
import dotenv from 'dotenv';
import API_KEY from './api.js';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8594037,
      lng: 2.3007845
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
