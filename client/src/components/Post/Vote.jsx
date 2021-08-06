import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';

import request from '../../lib/getInfo.js';
import { StyledVotingDiv, StyledVote, StyledVoteCount } from '../../css/sharedcss.jsx';
import upVoteIcon from '../../../../assets/icons/upvote.png';


const StyledUpvote = styled(StyledVote)`
  filter: ${props => props.isUpvoted ? "sepia(50%) saturate(3000%) hue-rotate(59deg) brightness(65%) contrast(80%)" : "none"}
`;

const StyledDownvote = styled(StyledVote)`
  transform: rotateX(180deg);
  filter: ${props => props.isDownvoted ? "invert(85%) sepia(100%) saturate(3000%) hue-rotate(340deg) brightness(75%) contrast(80%)" : "none"}
`;

const Vote = ({ id, voteCount }) => {
  const [vote, setVote] = useState(voteCount);
  const [isUpvoted, setUpvoted] = useState(sessionStorage.getItem(`isUpvoted-${id}`));
  const [isDownvoted, setDownvoted] = useState(sessionStorage.getItem(`isDownvoted-${id}`));

  const voteChange = (voteIncrement, callback) => {
    request.putVoteRequest(id, voteIncrement)
      .then(() => {
        setVote(voteIncrement);
        callback();
      })
      .catch((err) => console.log(err));
  };

  const onUpvoteClick = () => {
    if (isUpvoted) {
      voteChange(vote - 1, () => setUpvoted(false));
    } else {
      if (isDownvoted) {
        voteChange(vote + 2, () => {
          setDownvoted(false);
          setUpvoted(true);
        });
      } else {
        voteChange(vote + 1, () => setUpvoted(true));
      }
    }
  };

  const onDownvoteClick = () => {
    if (isDownvoted) {
      voteChange(vote + 1, () => setDownvoted(false));
    } else {
      if (isUpvoted) {
        voteChange(vote - 2, () => {
          setUpvoted(false);
          setDownvoted(true);
        });
      } else {
        voteChange(vote - 1, () => setDownvoted(true));
      }
    }
  };

  useEffect(() => {
    sessionStorage.setItem(`isUpvoted-${id}`, isUpvoted);
    sessionStorage.setItem(`isDownvoted-${id}`, isDownvoted);
  }, [isUpvoted, isDownvoted]);

  return (
      <StyledVotingDiv>
        <StyledUpvote src={upVoteIcon} alt="upvote" isUpvoted={isUpvoted} onClick={onUpvoteClick}></StyledUpvote>
        <StyledVoteCount>{vote}</StyledVoteCount>
        <StyledDownvote src={upVoteIcon} alt="downvote" isDownvoted={isDownvoted} onClick={onDownvoteClick}></StyledDownvote>
      </StyledVotingDiv>
  );
};

export default Vote;