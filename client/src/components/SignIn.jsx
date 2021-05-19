import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {
  StyledBGDiv,
  StyledWelcomeBody,
  StyledH1,
  StyledH4,
  StyledSignupButton,
  StyledWelcomeSection,
  StyledArchPic,
  StyledCranePic
} from '../css/sharedcss.jsx';

const SignIn = () => {
  return (
    <>
      <StyledWelcomeBody>
        <StyledWelcomeSection className="bg-dark">
          <StyledH1>A community effort to help build what you need.</StyledH1>
          <StyledH4>Let's get to work</StyledH4>
          <StyledSignupButton type="button" className="btn btn-warning sign-up" id="signUpClient">Sign up to Ask</StyledSignupButton>
          <StyledSignupButton type="button" className="btn btn-light sign-up" id="signUpEngineer">Apply to Help</StyledSignupButton>
        </StyledWelcomeSection>
      </StyledWelcomeBody>
    </>
  );
};

export default SignIn;
