import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './UserInformationForm.css';
import { SelectItemsBar } from '../../organisms/';
import { favoriteSportInputs } from './FavoriteSportInputs';
const UserInformationForm = ({ history, location, rootModel }) => {
  const [city, setCity] = useState('');
  const [preferredSports, setPreferredSports] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    console.log('preferredSports', preferredSports);
    console.log('city', !!city);
  };

  return (
    <>
      <div className='formContainer'>
        <form>
          <div className='label'>City</div>
          <div className='itemWrapper'>
            <select
              onChange={(event) => setCity(event.target.value)}
              value={city}
              id='country'
              name='country'
              className='selectInput'>
              <option defaultValue hidden>
                Choose here
              </option>
              <option value='australia'>Australia</option>
              <option value='canada'>Canada</option>
              <option value='usa'>USA</option>
            </select>
          </div>

          <div className='label'>Favorite Sports</div>
          <SelectItemsBar
            items={favoriteSportInputs}
            setPreferredSports={setPreferredSports}
            preferredSports={preferredSports}
          />
          <div className='itemWrapper'>
            <button onClick={(e) => submit(e)} className='button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default observer(UserInformationForm);
