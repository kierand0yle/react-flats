import React, { Component } from 'react';

class Flat extends Component {

  /* need to add style somehow on the className for card div style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url({this.props.imageUrl};);" */

  render () {
    return (
      <div className="card" style={{backgroundImage: `url(${this.props.imageUrl})`}}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}


export default Flat;
