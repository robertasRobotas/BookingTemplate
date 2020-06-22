import React from 'react';
import './SelectItem.css';

let itemsList = [];
const selectItem = ({ item, setPreferredSports, preferredSports }) => {
  if (itemsList.includes(item)) {
    itemsList = itemsList.filter((itemFromList) => itemFromList !== item);
  } else {
    itemsList.push(item);
  }

  setPreferredSports(itemsList);
  console.log('preferredSports', preferredSports);
};

const selectCheck = (item) => {
  return itemsList.includes(item);
};

const SelectItem = ({ item, setPreferredSports, preferredSports }) => {
  return (
    <div
      onClick={() => selectItem({ item, setPreferredSports, preferredSports })}
      className={selectCheck(item) ? 'selectedItem' : 'notSelectedItem'}>
      {item}
    </div>
  );
};

export default SelectItem;
