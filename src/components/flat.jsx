import React, { Component } from 'react';

class Flat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClick = () => {
    if (!this.state.active) {
      this.setState({
        active: true
      });
      this.props.selectFlat(this.props.lat, this.props.lng);
    } else {
      this.setState({
        active: false
      });
      this.props.selectFlat(null, null);
    }
  }

  render () {
    return (
      <div style={{backgroundImage: `url(${this.props.imageUrl})`}} onClick={this.handleClick} className= {this.state.active ? "card-active": "card"} >
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
