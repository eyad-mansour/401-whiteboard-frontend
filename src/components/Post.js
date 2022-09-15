import React from "react";

export default function Post(props) {
  return (
    <div>
      {props.posts.map((post, idx) => {
        return (
          <div key={idx}>
            <p>{post.postName}</p>
            <p>{post.postStatus}</p>
          </div>
        );
      })}
    </div>
  );
}
