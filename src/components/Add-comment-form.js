import React from 'react';
import axios from 'axios';
import cookies from 'react-cookies';

export default function AddComment(props) {
  const addCommentURL = `https://whiteboared-401-eyad.herokuapp.com/comment`;
  // http://localhost:3000

  const addComment = async (e) => {
    e.preventDefault();
    const data = {
      commentName: e.target.commentName.value,
      commentID: props.commentID,
    };

    await axios
      .post(addCommentURL, data, {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then(() => {
        props.getAllComment();
      });
  };

  return (
    <>
      <p style={{ backgroundColor: 'black' }}>add comment</p>
      <form onSubmit={addComment}>
        <input
          name='commentName'
          id='commentName'
          type='text'
          placeholder='add comment'
        />
        <input type='submit' />
      </form>
    </>
  );
}
