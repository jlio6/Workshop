import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar.jsx';
import SignIn from './components/SignIn.jsx';
import Description from './components/Description.jsx';
import Footer from './components/Footer.jsx';
import Forum from './components/Forum.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    min-height: 100%;
    background-color: rgb(80, 80, 80);
  }
`;

const App = () => {
  const [userLogin, setUserLogin] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));