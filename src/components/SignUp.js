import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';

export default function SingUp() {
  const { handleSignIn, handleSignUp } = useContext(authContext);
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
