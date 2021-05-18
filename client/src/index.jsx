import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';

const App = () => {
  const [userLogin, setUserLogin] = useState(0);
  return (
    <div>
      <Navbar />
      <h1>Hello World!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));