import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';

import request from '../lib/getInfo.js';
import { StyledPostDiv, StyledVotingDiv, StyledUpvote, StyledVoteCount, StyledDownvote, StyledPostSummary, StyledQuestionBody, StyledDivider, StyledCommentDiv, StyledCommentIcon, StyledUserPicSmall, StyledUsername, StyledStampWrapper, StyledDetailWrapper, StyledClientIcons, StyledIconLabel } from '../css/sharedcss.jsx';
import stampPic from '../../../assets/icons/stamp.png';
import blueprintPic from '../../../assets/icons/blueprint.png';
import userPic from '../../../assets/img/jlio.jpg';
import upVoteIcon from '../../../assets/icons/upvote.png';

const StyledStampIcon = styled(StyledClientIcons)`
  filter: ${props => !props.needStamp ? "grayscale(1) opacity(0.35)" : "grayscale(0)"}
`;

const StyledDetailIcon = styled(StyledClientIcons)`
  filter: ${props => !props.needDetail ? "grayscale(1) opacity(0.35)" : "grayscale(0)"}
`;



const Post = ({ id, username, title, question, needStamp, needDetail, voteCount }) => {
  const [vote, setVote] = useState(voteCount);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const voteChange = (id, voteIncrement, callback) => {
    request.putVoteRequest(id, voteIncrement)
          .then(() => {
            setVote(voteIncrement);
            callback();
          })
          .catch((err) => console.log(err));
  }

  const onUpvoteClick = () => {
    if (upvoted) {
      request.putVoteRequest(id, vote - 1)
        .then(() => {
          setVote(vote - 1);
          setUpvoted(false);
        })
        .catch((err) => console.log(err));
    } else {
      request.putVoteRequest(id, vote + 1)
        .then(() => {
          setVote(vote + 1);
          setUpvoted(true);
        })
        .catch((err) => console.log(err));
    }
  }

  const onDownvoteClick = () => {
    if (downvoted) {
      request.putVoteRequest(id, vote + 1)
        .then(() => {
          setVote(vote + 1);
          setDownvoted(false);
        })
        .catch((err) => console.log(err));
    } else {
      if (upvoted) {

      }
      request.putVoteRequest(id, vote - 1)
        .then(() => {
          setVote(vote - 1);
          setDownvoted(true);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <StyledPostDiv className="container new-post bg-dark">
      <StyledVotingDiv>
        <StyledUpvote src={upVoteIcon} alt="upvote" onClick={onUpvoteClick}></StyledUpvote>
        <StyledVoteCount>{vote}</StyledVoteCount>
        <StyledDownvote src={upVoteIcon} alt="downvote" onClick={onDownvoteClick}></StyledDownvote>
      </StyledVotingDiv>
      <StyledPostSummary href="#">{title}</StyledPostSummary>
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