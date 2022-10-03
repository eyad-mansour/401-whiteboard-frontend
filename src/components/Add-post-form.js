import React from 'react';
import axios from 'axios';
import cookies from 'react-cookies';

export default function AddPost(props) {
  const addPostURL = 'https://whiteboared-401-eyad.herokuapp.com/post';

  const addPost = async (e) => {
    e.preventDefault();
    const data = {
      postName: e.target.postName.value,
    };
    console.log(data, 'line 14');

    await axios
      .post(addPostURL, data, {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then((res) => {
        console.log('line 22', res.data);
        props.getAllPost();
      })
      .catch((e) => console.log(e));
  };

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
