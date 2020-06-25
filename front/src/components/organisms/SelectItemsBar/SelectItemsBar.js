import React, { useState } from 'react';
import './SelectItemsBar.css';
import { SelectItem, ValidationMessage } from '../../atoms';

const SelectItemsBar = ({
  history,
  rootModel,
  items,
  setPreferredSports,
  preferredSports,
}) => {
  return (
    <div className='selectBarWrapper'>
      <div className='selectBar'>
        {items.map((item) => {
          return (
            <SelectItem
              key={item}
              item={item}
              setPreferredSports={setPreferredSports}
              preferredSports={preferredSports}
            />
          );
        })}
      </div>
      <ValidationMessage message={'Suppp'} />
    </div>
  );
};

export default SelectItemsBar;
