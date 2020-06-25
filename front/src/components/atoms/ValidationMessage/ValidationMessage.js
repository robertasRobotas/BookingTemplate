import React, { useState } from 'react';
import './ValidationMessage.css';

const ValidationMessage = ({ message, status }) => {
  return <div className={status ? 'validated' : 'notValidated'}>{message}</div>;
};

export default ValidationMessage;
