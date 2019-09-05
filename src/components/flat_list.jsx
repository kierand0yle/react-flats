import React from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat key={flat.name} price={flat.price} name={flat.name} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} />)}
    </div>
  );
};

export default FlatList;
