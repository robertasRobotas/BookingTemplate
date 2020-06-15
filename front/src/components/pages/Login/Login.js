import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from '../../atoms';
import styled from 'styled-components';
import './Login.css';
import Logo from '../../../assets/photos/logo.png';

function Login() {
  return (
    <div>
      <div className='logoWrapper'>
        <img className='logo' alt='lol' src={Logo} />
      </div>

      <div className={'buttonWrapper'}>
        <GoogleLoginButton />
      </div>
      <div className={'buttonWrapper'}>
        <FacebookLoginButton />
      </div>
    </div>
  );
}

export default Login;
