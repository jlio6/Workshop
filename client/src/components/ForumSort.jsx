import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import { StyledForumSort, StyledFilterButton, StyledSortIcon, StyledSortIconEllipsis } from '../css/sharedcss.jsx';

const ForumSort = () => {
  const [userLogin, setUserLogin] = useState(0);
  return (
    <StyledForumSort className="bg-dark">
      <StyledFilterButton className="btn btn-outline-warning active"><StyledSortIcon className="fas fa-trophy"></StyledSortIcon>Top</StyledFilterButton>
      <StyledFilterButton type="button" className="btn btn-outline-warning"><StyledSortIcon className="fas fa-chart-line"></StyledSortIcon>Trending</StyledFilterButton>
      <StyledFilterButton type="button" className="btn btn-outline-warning"><StyledSortIcon className="fas fa-pepper-hot"></StyledSortIcon>Most Debated</StyledFilterButton>
      <StyledFilterButton type="button" className="btn btn-outline-warning"><StyledSortIcon className="fas fa-concierge-bell"></StyledSortIcon>Newest</StyledFilterButton>
      <StyledFilterButton type="button" className="btn btn-outline-warning ellipsis"><StyledSortIconEllipsis className="fas fa-ellipsis-h"></StyledSortIconEllipsis></StyledFilterButton>
    </StyledForumSort>
  );
};

export default ForumSort;