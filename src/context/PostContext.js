import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [showPostComponent, setShowPostComponent] = useState(false);

  const getAllPost = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND}/posts`, {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then((response) => {
        const allPosts = response.data;
        console.log(allPosts);
        setPosts(allPosts);
        setShowPostComponent(true);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const deleteOnePost = async (post) => {
    console.log(post, 'helllo');
    await axios.delete(
      `${process.env.REACT_APP_BACKEND}/post/${post.id}/${post.userID}`,
      {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      }
    );
    getAllPost();
  };

  const deleteOneComment = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND}/comment/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies.load('token')}`,
      },
    });
    getAllPost();
  };
  const addPost = async (e) => {
    e.preventDefault();
    const data = {
      postName: e.target.postName.value,
      userID: cookies.load('userID'),
    };
    console.log(data, 'line 51');

    await axios
      .post(`${process.env.REACT_APP_BACKEND}/post`, data, {
        headers: {
          Authorization: `Bearer ${cookies.load('token')}`,
        },
      })
      .then((res) => {
        console.log('line 60', res.data);
        getAllPost();
      })
      .catch((e) => console.log(e));
  };
  const value = {
    posts,
    getAllPost,
    deleteOneComment,
    deleteOnePost,
    showPostComponent,
    addPost,
  };

  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
};
export default PostContextProvider;
