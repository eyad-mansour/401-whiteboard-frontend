import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './context/AuthContext';
import PostContextProvider from './context/PostContext';
import {ChakraProvider, extendTheme, ColorModeScript} from '@chakra-ui/react';
import {myNewTheme} from './theme/index';

const theme = extendTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <ChakraProvider theme={myNewTheme}>
          <App />
        </ChakraProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
