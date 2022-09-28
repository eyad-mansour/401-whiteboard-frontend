import axios from 'axios';
import React, { useState } from 'react';
import base64 from 'base-64';
import cookies from 'react-cookies';

export default function SingUp(props) {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      userName: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await axios
      .post('https://whiteboared-401-eyad.herokuapp.com/signup', data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.email.value,
      password: e.target.password.value,
    };
    const encodedCredintial = base64.encode(
      `${data.username}:${data.password}`
    );
    console.log(encodedCredintial);
    await axios
      .post(
        'https://whiteboared-401-eyad.herokuapp.com/login',
        {},
        {
          headers: {
            Authorization: `Basic ${encodedCredintial}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        cookies.save('token', res.data.token);
        cookies.save('userID', res.data.id);
        cookies.save('userName', res.data.userName);
        props.setLoggedin(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <h2>Sign up</h2>
        <form action='' onSubmit={handleSignUp}>
          <input type='text' placeholder='username' name='username' />
          <input type='email' placeholder='email' name='email' />
          <input type='text' placeholder='password' name='password' />
          <button type='submit'>Save</button>
        </form>
      </div>

      <div>
        <h2>Sign in</h2>
        <form action='' onSubmit={handleSignIn}>
          <input type='email' placeholder='email' name='email' />
          <input type='password' placeholder='password' name='password' />
          <button type='submit'>login</button>
        </form>
      </div>
    </>
  );
}
