import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './UserInformationForm.css';

const UserInformationForm = ({ history, location, rootModel }) => {
  const [city, setCity] = useState('');
  const [preferredSports, setPreferredSports] = useState([]);

  return (
    <>
      <div className='formContainer'>
        <form>
          <label>First Name</label>
          <input
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your name..'
          />

          <label>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lastname'
            placeholder='Your last name..'
          />

          <label>Country</label>
          <select id='country' name='country'>
            <option value='australia'>Australia</option>
            <option value='canada'>Canada</option>
            <option value='usa'>USA</option>
          </select>

          <input type='submit' value='Submit' />
        </form>
      </div>
    </>
  );
};

export default observer(UserInformationForm);
