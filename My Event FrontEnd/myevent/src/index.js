import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'
import { store } from './api/store ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Router>
    </Provider>
  </React.StrictMode>
);

