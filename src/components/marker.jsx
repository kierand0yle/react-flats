import React, { Component } from 'react';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: ""
    };
  }

  render () {
    return (
      <div style={{
        color: 'white',
        background: 'red',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
      </div>
    );
  }
}


export default Marker;
