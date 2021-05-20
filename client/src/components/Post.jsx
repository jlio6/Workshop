import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import { StyledPostDiv, StyledPostSummary, StyledQuestionBody, StyledDivider, StyledCommentDiv, StyledCommentIcon, StyledUserPicSmall, StyledUsername, StyledStampWrapper, StyledDetailWrapper, StyledClientIcons, StyledIconLabel } from '../css/sharedcss.jsx';
import stampPic from '../../../assets/icons/stamp.png';
import blueprintPic from '../../../assets/icons/blueprint.png';
import userPic from '../../../assets/img/jlio.jpg'


const Post = ({ username, category, question, needStamp, needDetail }) => {
  return (
    <StyledPostDiv className="container new-post bg-dark">
      {/* <StyledUserPicSmall className="profile-photo" alt="profile pic" src={userPic}/> */}
      <StyledPostSummary href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet vulputate nunc?</StyledPostSummary>
      <StyledQuestionBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet vulputate nunc, sit amet pretium est suscipit vel. Integer fringilla, mi quis elementum pulvinar, lacus mi quis elementum...</StyledQuestionBody>
      <StyledDivider />
      <StyledUsername><i class="fas fa-check"></i>{`  ${username}`}</StyledUsername>
      <span className="timeago"></span>
      <StyledCommentDiv className="d-flex flex-row">
        <StyledCommentIcon className="fas fa-comment p-1"></StyledCommentIcon>
        <span className="p-1" id="comment-num">5</span>
      </StyledCommentDiv>
      <StyledStampWrapper id="stamp-wrapper">
        <StyledClientIcons id="stamp-pic" alt="stamp of approval" src={stampPic} />
        <StyledIconLabel className="bg-dark stamp-hover" id="stamp-hover">User needs a stamp</StyledIconLabel>
      </StyledStampWrapper>
      <StyledDetailWrapper id="detail-wrapper">
        <StyledClientIcons id="detail-pic" alt="blueprint drawings" src={blueprintPic} />
        <StyledIconLabel className="bg-dark detail-hover" id="detail-hover">User needs a detail</StyledIconLabel>
      </StyledDetailWrapper>
    </StyledPostDiv>
  );
};

export default Post;