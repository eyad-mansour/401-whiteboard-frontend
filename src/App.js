import {useEffect, useContext} from 'react';
import {When} from 'react-if';
// import axios from "axios";
import Post from './components/Post';
import SingUp from './components/SignUp';
import ShowPost from './components/ShowPost';
import {authContext} from './context/AuthContext';
import {Button, Flex, Spacer, Box} from '@chakra-ui/react';

function App() {
  const {isAuth, logOut, checkToken} = useContext(authContext);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Flex>
      <When condition={!isAuth}>
        <SingUp />
      </When>
      <When condition={isAuth}>
        <Box>
          <Button m='2em' mt='2em' colorScheme='blue' onClick={logOut}>
            logout
          </Button>
        </Box>

        <Box>
          <ShowPost />
          <Post />
        </Box>
      </When>
    </Flex>
  );
}

export default App;
