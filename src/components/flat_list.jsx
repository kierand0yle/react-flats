import React from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat key={flat.name} />)}
    </div>
  );
};

export default FlatList;
