import { useEffect, useContext } from 'react';
import { When } from 'react-if';
// import axios from "axios";
import Post from './components/Post';
import SingUp from './components/SignUp';
import ShowPost from './components/ShowPost';
import { authContext } from './context/AuthContext';

function App() {
  const { isAuth, logOut, checkToken } = useContext(authContext);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className='App'>
      <When condition={!isAuth}>
        <SingUp />
      </When>
      <When condition={isAuth}>
        <button onClick={logOut}>logout</button>
        <ShowPost />
        <Post />
      </When>
    </div>
  );
}

export default App;
