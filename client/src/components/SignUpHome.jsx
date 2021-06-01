import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIn from './SignIn.jsx';
import Description from './Description.jsx';
import Footer from './Footer.jsx';

const SignUpHome = () => {
  const [navPage, setNavPage] = useState(0);
  return (
    <>
      <SignIn />
      <Description />
      <Footer />
    </>
  );
};

export default SignUpHome;
