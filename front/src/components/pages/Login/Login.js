import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from '../../atoms';
import styled from 'styled-components';
import './Login.css';

function Login() {
  const Form = styled.div`
    position: relative;
    width: 50%;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
  `;

  return (
    <div>
      <img alt='lol' src={'../../../assets/photos/logo.png'} />
      <Form>
        <GoogleLoginButton />

        <FacebookLoginButton />
      </Form>
    </div>
  );
}

export default Login;
