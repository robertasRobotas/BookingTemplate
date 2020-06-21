import React, { useState } from 'react';
import './SelectItemsBar.css';
import { SelectItem } from '../../atoms';

const SelectItemsBar = ({ history, rootModel, items }) => {
  return (
    <div className='selectBar'>
      {items.map((item) => {
        return <SelectItem item={item} />;
      })}
    </div>
  );
};

export default SelectItemsBar;
