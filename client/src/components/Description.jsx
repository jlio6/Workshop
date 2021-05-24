import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import forumLogo from '../../../assets/icons/chat.png';
import blueprintLogo from '../../../assets/icons/blueprint.png';
import stampLogo from '../../../assets/icons/stamp.png';
import manDrawingBG from '../../../assets/img/man-drawing-sketchpad.jpeg';


import { StyledDescriptDiv, StyledDescriptImg, StyledSubtitle, StyledDescriptPara, StyledLearnMoreButton } from '../css/sharedcss.jsx';

const Description = () => {
  return (
    <>
      <div className="description-body d-flex flex-wrap justify-content-center bg-dark">
        <StyledDescriptDiv id="description-forum" className="p-2">
          <StyledDescriptImg id="forum-pic" alt="forum discussion" src={forumLogo} />
          <StyledSubtitle className="text-light">Forum Q&A</StyledSubtitle>
          <StyledDescriptPara>Ask the community for feedback on anything from your latest bedroom addition to your rooftop AC unit installation.</StyledDescriptPara>
        </StyledDescriptDiv>
        <StyledDescriptDiv id="description-details" className="p-2">
          <StyledDescriptImg alt="blueprint drawings" src={blueprintLogo} />
          <StyledSubtitle className="text-light">New Blueprints</StyledSubtitle>
          <StyledDescriptPara>Let our engineers refine your drawings directly through our user interface.</StyledDescriptPara>
        </StyledDescriptDiv>
        <StyledDescriptDiv id="description-stamp" className="p-2">
          <StyledDescriptImg alt="stamp of approval" src={stampLogo} />
          <StyledSubtitle className="text-light">Stamped Drawings</StyledSubtitle>
          <StyledDescriptPara>Get your drawings stamped faster than ever with an extra set of eyes so you can build with confidence.</StyledDescriptPara>
        </StyledDescriptDiv>
        <StyledLearnMoreButton to="/engineeringforums" type="button" className="btn btn-warning">Get Started</StyledLearnMoreButton>
      </div>
    </>
  );
};

export default Description;
