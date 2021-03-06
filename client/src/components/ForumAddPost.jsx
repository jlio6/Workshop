import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import AddPost from './AddPost.jsx';
import { StyledAddPost, StyledUserPic, StyledSortDropdown, StyledNewPostButton, StyledPostSubmit } from '../css/sharedcss.jsx';
import userPic from '../../../assets/img/jlio.jpg'

const ForumAddPost = (setLoading, refreshPosts) => {
  const [userLogin, setUserLogin] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onOpenModalClick = () => {
    console.log('hey man');
  }

  return (
    <StyledAddPost className="dropdown bg-dark">
      <StyledUserPic className="user" alt="logged in user pic" src={userPic} />
      <StyledSortDropdown className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose a Community</StyledSortDropdown>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">ws/all</a>
        <a className="dropdown-item" href="#">ws/campuswork</a>
        <a className="dropdown-item" href="#">ws/retrofit</a>
        <a className="dropdown-item" href="#">ws/residential</a>
        <a className="dropdown-item" href="#">ws/renovation</a>
      </div>
      <StyledNewPostButton onClick={() => setShowModal(true)} type="button" className="btn btn-light">Ask a question...</StyledNewPostButton>
      <StyledPostSubmit onClick={() => setShowModal(true)} className="btn btn-warning" type="button">New Post</StyledPostSubmit>
      <AddPost
        onOpenModalClick={onOpenModalClick}
        showModal={showModal}
        setShowModal={setShowModal}
        setLoading={setLoading}
        refreshPosts={refreshPosts}
      />
    </StyledAddPost>
  );
};

export default ForumAddPost;