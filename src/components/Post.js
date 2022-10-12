import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import AddPost from './Add-post-form';
import AddComment from './Add-comment-form';
import { PostContext } from '../context/PostContext';
import { authContext } from '../context/AuthContext';
import cookies from 'react-cookies';

export default function Post(props) {
  const {
    posts,
    getAllPost,
    deleteOneComment,
    deleteOnePost,
    showPostComponent,
    addPost,
  } = useContext(PostContext);
  const { role, isAuth, capabilities, userAbility } = useContext(authContext);

  useEffect(() => {
    // setRole(cookies.load('role'));
    getAllPost();
  }, []);
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
        <AddPost />
        {/* <form onSubmit={handleSubmit()}> */}
        {showPostComponent &&
          posts.map((post, idx) => {
            return (
              <div key={idx}>
                <Card>
                  <Card.Body>
                    <Card.Title>Post: {post.postName}</Card.Title>
                    {console.log('hellloooo', post.userID)}

                    {userAbility(cookies.load('capabilities'), post.userID) ? (
                      <button onClick={() => deleteOnePost(post)}>
                        delete
                      </button>
                    ) : (
                      <></>
                    )}
                  </Card.Body>
                  <AddComment commentID={post.id} />
                  {console.log(post.userID + '  line 655555')}
                  {post.Comments.map((comment, idx) => {
                    return (
                      <div key={idx}>
                        comment: {comment.commentName}
                        {userAbility(
                          cookies.load('capabilities'),
                          post.userID
                        ) ? (
                          <button onClick={() => deleteOnePost(post)}>
                            delete
                          </button>
                        ) : (
                          <></>
                        )}
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
