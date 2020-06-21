import React from 'react';
import './SelectItem.css';

const selectItem = ({ item, setPreferredSports, preferredSports }) => {
  setPreferredSports(item);
  console.log('preferredSports', preferredSports);
};

const SelectItem = ({ item, setPreferredSports, preferredSports }) => {
  return (
    <div
      onClick={() => selectItem({ item, setPreferredSports, preferredSports })}
      className='item'>
      {item}
    </div>
  );
};

export default SelectItem;
