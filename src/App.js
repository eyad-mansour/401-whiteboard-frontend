import { useEffect, useState } from 'react';
import { When } from 'react-if';

// import axios from "axios";
import Post from './components/Post';
import SingUp from './components/SignUp';
import ShowPost from './components/ShowPost';
import cookies from 'react-cookies';
import Header from './components/Header';

function App() {
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const token = cookies.load('token');
    // console.log(token);
    if (token) {
      setLoggedin(true);
    }
  }, []);

  const logOut = () => {
    cookies.remove('token');
    setLoggedin(false);
  };

  return (
    <div className="App">
      <Header />
      <When condition={!loggedin}>
        <SingUp setLoggedin={setLoggedin} />
      </When>
      <When condition={loggedin}>
        <button onClick={logOut}>logout</button>
        <ShowPost />
      </When>
    </div>
  );
}

export default App;
