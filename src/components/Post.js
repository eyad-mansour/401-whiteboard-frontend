import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [showPostComponent, setShowPostComponent] = useState(false);

  const urlPost = "https://whiteboared-401-eyad.herokuapp.com/posts";

  const getAllPost = async () => {
    axios
      .get(urlPost)
      .then((response) => {
        const allPosts = response.data;
        console.log(allPosts);
        setPosts(allPosts);
        setShowPostComponent(true);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div>
      {/* <form onSubmit={handleSubmit()}> */}
      <form>
        <label>post</label>
        <textarea placeholder="post" />

        <textarea placeholder="comment" />

        {showPostComponent &&
          posts.map((posts, idx) => {
            return (
              <div key={idx}>
                <p>{posts.postName}</p>
              </div>
            );
          })}
      </form>
    </div>
  );
}
