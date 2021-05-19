import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import SignIn from './components/SignIn.jsx';
import Description from './components/Description.jsx';
import Footer from './components/Footer.jsx';



const App = () => {
  const [userLogin, setUserLogin] = useState(0);
  return (
    <div>
      <Navbar />
      <SignIn />
      <Description />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));