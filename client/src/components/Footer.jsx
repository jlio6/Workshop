import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import manDrawingBG from '../../../assets/img/man-drawing-sketchpad.jpeg';


import { StyledFooter } from '../css/sharedcss.jsx';

const Footer = () => {
  return (
    <div className="bg-dark">
      <StyledFooter id="random-image" src={manDrawingBG} alt="man drawing sketch" />
    </div>
  );
};

export default Footer;
