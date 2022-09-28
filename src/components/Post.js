import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Post(props) {
  const [posts, setPosts] = useState([]);
  const [showPostComponent, setShowPostComponent] = useState(false);

  const urlPost = 'https://whiteboared-401-eyad.herokuapp.com/posts';

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    // await axios
    //   .get(urlPost)
    //   .then((response) => {
    //     const allPosts = response.data;
    //     console.log(allPosts);
    //     setPosts(allPosts);
    //     setShowPostComponent(true);
    //   })
    //   .catch((error) => console.error(`Error: ${error}`));
    let res = await axios.get(
      'https://whiteboared-401-eyad.herokuapp.com/posts'
    );
    setPosts(res.data);
    console.log(res.data);
  };
  // useEffect(() => {
  //   getAllPost();
  // }, []);

  console.log(posts);

  return (
    <div>
      {/* <form onSubmit={handleSubmit()}> */}
      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <p>{post.postName}</p>
          </div>
        );
      })}
    </div>
  );
}
