import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import $ from 'jquery';
import axios from 'axios';

import Navbar from './Navbar.jsx';

const Forum = () => {
  const [userLogin, setUserLogin] = useState(0);
  return (
    <div>
      <Navbar />

    </div>
  );
};

export default Forum;