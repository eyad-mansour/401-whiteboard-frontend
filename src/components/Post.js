import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [showPostComponent, setShowPostComponent] = useState(false);

  const urlPost = "http://localhost:3000/posts";

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
      <Form>
        <Form.Group>
          <Form.Label>Post</Form.Label>
          <Form.Control type="text" name="postName" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" name="commentName" />
        </Form.Group>

        <Button variant="outline-dark" type="submit" value="Add Post">
          Submit
        </Button>

        <Form.Group>
          <Form.Label>Post </Form.Label>
          {showPostComponent &&
            posts.map((posts, idx) => {
              return (
                <div key={idx}>
                  <p>{posts.postName}</p>
                  <Form.Group>
                    <Form.Label>Comment </Form.Label>
                  </Form.Group>
                </div>
              );
            })}
        </Form.Group>
      </Form>
    </div>
  );
}
