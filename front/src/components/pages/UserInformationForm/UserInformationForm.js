import React from 'react';
import Wrapper from '../../_hoc/Wrapper';
import { observer } from 'mobx-react';
import './UserInformationForm.css';

const UserInformationForm = ({ history, location, rootModel }) => {
  return (
    <>
      <div className='formContainer'>
        <form>
          <label for='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your name..'
          />

          <label for='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lastname'
            placeholder='Your last name..'
          />

          <label for='country'>Country</label>
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
