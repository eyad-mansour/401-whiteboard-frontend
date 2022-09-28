import React from 'react';
import axios from 'axios';
import cookies from 'react-cookies';

export default function AddComment(props) {
  const addCommentURL = `https://whiteboared-401-eyad.herokuapp.com/comment`;

  const addComment = async (e) => {
    e.preventDefault();
    const data = {
      commentName: e.target.commentName.value,
    };

    await axios
      .post(addCommentURL, data, {
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
      <p style={{ backgroundColor: 'black' }}>add comment</p>
      <form onSubmit={addComment}>
        <input name='commentName' type='text' placeholder='add comment' />
        <input type='submit' />
      </form>
    </>
  );
}
