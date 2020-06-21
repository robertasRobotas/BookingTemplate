import React from 'react';
import './SelectItem.css';

const itemsList = [];
const selectItem = ({ item, setPreferredSports, preferredSports }) => {
  itemsList.push(item);

  setPreferredSports(itemsList);
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
