import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import AddPost from './Add-post-form';
import cookies from 'react-cookies';
import AddComment from './Add-comment-form';
export default function Post(props) {
  const [posts, setPosts] = useState([]);
  const [role, setRole] = useState('');
  const [showPostComponent, setShowPostComponent] = useState(false);

  // http://localhost:3000/
  // https://whiteboared-401-eyad.herokuapp.com/posts
  const urlPost = 'https://whiteboared-401-eyad.herokuapp.com/posts';
  const deletePost = 'https://whiteboared-401-eyad.herokuapp.com/post';
  const deleteComment = 'https://whiteboared-401-eyad.herokuapp.com/comment';

  const getAllPost = async () => {
    await axios
      .get(urlPost)
      .then((response) => {
        const allPosts = response.data;
        console.log(allPosts);
        setPosts(allPosts);
        setShowPostComponent(true);
      })
      .catch((error) => console.error(`Error: ${error}`));
    // let res = await axios.get(
    //   'https://whiteboared-401-eyad.herokuapp.com/posts'
    // );
    // setPosts(res.data);
    // console.log(res.data);
  };

  const deleteOnePost = async (id) => {
    await axios.delete(`${deletePost}/${id}`);
    getAllPost();
  };

  const deleteOneComment = async (id) => {
    await axios.delete(`${deleteComment}/${id}`);
    getAllPost();
  };

  useEffect(() => {
    setRole(cookies.load('role'));

    getAllPost();
  }, []);

  console.log(posts);

  return (
    <div>
      {/* <form onSubmit={handleSubmit()}> */}
      {/* {showPostComponent &&
        posts.map((post, idx) => {
          return (
            <div key={idx}>
              <p>{post.postName}</p>
            </div>
          );
        })} */}

      <div>
        <AddPost getAllPost={getAllPost} />
        {/* <form onSubmit={handleSubmit()}> */}
        {showPostComponent &&
          posts.map((post, idx) => {
            return (
              <div key={idx}>
                <Card>
                  <Card.Body>
                    <Card.Title>Post: {post.postName}</Card.Title>
                    <button onClick={() => deleteOnePost(post.id)}>
                      delete
                    </button>
                  </Card.Body>
                  <AddComment getAllComment={getAllPost} commentID={post.id} />
                  {console.log(post + 'line 655555')}
                  {post.Comments.map((comment, idx) => {
                    return (
                      <div key={idx}>
                        comment: {comment.commentName}
                        <button onClick={() => deleteOneComment(comment.id)}>
                          {console.log(comment.id)}
                          delete
                        </button>
                      </div>
                    );
                  })}
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}
