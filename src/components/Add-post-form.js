import React from 'react';
import axios from 'axios';
import cookies from 'react-cookies';

export default function AddPost(props) {
  const addPostURL = 'https://whiteboared-401-eyad.herokuapp.com/post';

  const addPost = async (e) => {
    e.preventDefault();
    const data = {
      postName: e.target.postName.value,
      postStatus: e.target.postStatus.value,
    };
    // console.log(data);
    await axios
      .post(addPostURL, data, {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then(() => {
        props.getAllPost();
      });
  };

  return (
    <>
      <p style={{ backgroundColor: 'black' }}>add post</p>
      <form onSubmit={addPost}>
        <input name='postName' type='text' placeholder='add post name' />
        <input name='postStatus' type='text' placeholder='add post status' />
        <input type='submit' />
      </form>
    </>
  );
}
