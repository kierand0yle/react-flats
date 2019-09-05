import React from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat key={flat.name} price={flat.price} lat={flat.lat} lng={flat.lng} name={flat.name} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} selectFlat={props.selectFlat} />)}
    </div>
  );
};

export default FlatList;
