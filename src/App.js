import { useEffect, useState } from 'react';
import { When } from 'react-if';
import './App.css';
// import axios from "axios";
import Post from './components/Post';
import SingUp from './components/SignUp';
import ShowPost from './components/ShowPost';
import cookies from 'react-cookies';

function App() {
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const token = cookies.load('token');
    // console.log(token);
    if (token) {
      setLoggedin(true);
    }
  }, []);

  return (
    <div className="App">
      <When condition={!loggedin}>
        <SingUp setLoggedin={setLoggedin} />
      </When>
      <When condition={loggedin}>
        <ShowPost />
      </When>
    </div>
  );
}

export default App;
