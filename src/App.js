import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Post";

function App() {
  const [post, setPosts] = useState([]);
  const [showPostComponent, setShowPostComponent] = useState(false);

  const getAllPost = async (e) => {
    e.preventDefault();
    const allPosts = await axios.get(
      "https://whiteboared-401-eyad.herokuapp.com/post"
    );
    setPosts(allPosts.data);
    setShowPostComponent(true);
  };

  const addPost = async (e) => {
    e.preventDefault();
    const postContent = {
      postText: e.target.postText.value,
      commentText: e.target.commentText.value,
    };
    await axios.post(
      "https://whiteboared-401-eyad.herokuapp.com/post",
      postContent
    );
    getAllPost();
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="App">
      <form onSubmit={addPost}>
        <label htmlFor="">Post</label>
        <input type="text" name="postText" />

        {/* <label htmlFor="">commment</label> */}
        <input type="text" name="commentText" />

        <input type="submit" value="add post" />
      </form>
      {showPostComponent && <Posts post={post} />}
    </div>
  );
}

export default App;
