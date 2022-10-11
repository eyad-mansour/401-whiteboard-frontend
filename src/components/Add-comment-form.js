import React, { useContext } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { PostContext } from '../context/PostContext';

export default function AddComment(props) {
  const { getAllPost } = useContext(PostContext);

  const addComment = async (e) => {
    e.preventDefault();
    const data = {
      commentName: e.target.commentName.value,
      commentID: props.commentID,
    };

    await axios
      .post(`${process.env.REACT_APP_BACKEND}/comment`, data, {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then(() => {
        getAllPost();
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
