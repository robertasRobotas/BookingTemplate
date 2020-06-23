import React from 'react';
import './SelectItem.css';

const selectItem = ({ item, setPreferredSports, preferredSports }) => {
  setPreferredSports([...preferredSports, item]);
  console.log(preferredSports);
};

const selectCheck = ({ item, preferredSports }) => {
  return preferredSports.includes(item);
};

const SelectItem = ({ item, setPreferredSports, preferredSports }) => {
  return (
    <div
      onClick={() => selectItem({ item, setPreferredSports, preferredSports })}
      className={
        selectCheck({ item, preferredSports })
          ? 'selectedItem'
          : 'notSelectedItem'
      }>
      {item}
    </div>
  );
};

export default SelectItem;
