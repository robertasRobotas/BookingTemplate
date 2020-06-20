import React, { useState } from 'react';
import './SelectItemsBar.css';

const SelectItemsBar = ({ history, rootModel, items }) => {
  return (
    <div className='selectBar'>
      {items.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default SelectItemsBar;
