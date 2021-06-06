import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';


import { StyledPostDiv, StyledUpvote, StyledPostSummary, StyledQuestionBody, StyledDivider, StyledCommentDiv, StyledCommentIcon, StyledUserPicSmall, StyledUsername, StyledStampWrapper, StyledDetailWrapper, StyledClientIcons, StyledIconLabel } from '../css/sharedcss.jsx';
import stampPic from '../../../assets/icons/stamp.png';
import blueprintPic from '../../../assets/icons/blueprint.png';
import userPic from '../../../assets/img/jlio.jpg'

const StyledStampIcon = styled(StyledClientIcons)`
  filter: ${props => !props.needStamp ? "grayscale(1) opacity(0.35)" : "grayscale(0)"}
`;

const StyledDetailIcon = styled(StyledClientIcons)`
  filter: ${props => !props.needDetail ? "grayscale(1) opacity(0.35)" : "grayscale(0)"}
`;

const Post = ({ username, category, question, needStamp, needDetail }) => {
  return (
    <StyledPostDiv className="container new-post bg-dark">
      {/* <StyledUserPicSmall className="profile-photo" alt="profile pic" src={userPic}/> */}
      <StyledUpvote className="fas fa-arrow-up"></StyledUpvote>
      <StyledPostSummary href="#">{category}</StyledPostSummary>
      <StyledQuestionBody>{question}</StyledQuestionBody>
      <StyledDivider />
      <StyledUsername><i className="fas fa-check-circle fa-sm"></i>{`  ${username}`}</StyledUsername>
      <span className="timeago"></span>
      <StyledCommentDiv className="d-flex flex-row">
        <StyledCommentIcon className="fas fa-comment p-1"></StyledCommentIcon>
        <span className="p-1" id="comment-num">5</span>
      </StyledCommentDiv>
      <StyledStampWrapper id="stamp-wrapper">
        <StyledStampIcon id="stamp-pic" alt="stamp of approval" src={stampPic} needStamp={needStamp}/>
        <StyledIconLabel className="bg-dark stamp-hover" id="stamp-hover">User needs a stamp</StyledIconLabel>
      </StyledStampWrapper>
      <StyledDetailWrapper id="detail-wrapper">
        <StyledDetailIcon id="detail-pic" alt="blueprint drawings" src={blueprintPic} needDetail={needDetail} />
        <StyledIconLabel className="bg-dark detail-hover" id="detail-hover">User needs a detail</StyledIconLabel>
      </StyledDetailWrapper>
    </StyledPostDiv>
  );
};

export default Post;