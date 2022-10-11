import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

export default function AddPost() {
  const { addPost } = useContext(PostContext);

  return (
    <>
      <p style={{ backgroundColor: 'black' }}>add post</p>
      <form onSubmit={addPost}>
        <input name='postName' type='text' placeholder='add post name' />
        <input type='submit' />
      </form>
    </>
  );
}
