import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';

import request from '../lib/getInfo.js';
import { Modal, StyledCategoriesDiv, StyledModalCategories, StyledModalTitle, StyledModalPost, StyledStampOrDetail, StyledSubmitPost } from '../css/sharedcss.jsx';

const StyledModal = styled(Modal)`
  ${(props) => {
    if (!props.showModal) {
      return `
        visibility: hidden;
      `;
    } else {
      return `
        visibility: visible;
      `;
    }
  }}
`;

const AddPost = ({ showModal, setShowModal, onOpenModalClick, refreshPosts }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [needStamp, setNeedStamp] = useState(false);
  const [needDetail, setNeedDetail] = useState(false);
  const [community, setCommunity] = useState('all');

  const onModalSubmit = (event) => {
    event.preventDefault();

    if ($("#needStampCheck")[0].checked) {
      setNeedStamp(true);
    } else {
      setNeedStamp(false);
    }
    if ($("#needDetailCheck")[0].checked) {
      setNeedDetail(true);
    } else {
      setNeedDetail(false);
    }

    request.postQuestionRequest(title, message, needStamp, needDetail, community)
      .then(() => {
        console.log('post success');
        setShowModal(false);
        refreshPosts();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <StyledModal showModal={showModal}>
      <div>
        <form id="addPost">
          <StyledCategoriesDiv>
            <StyledModalCategories type="button" name="post" value="Post" />
            <StyledModalCategories type="button" name="images" value="Images" />
            <StyledModalCategories type="button" name="link" value="Link" />
          </StyledCategoriesDiv>
          <StyledModalTitle onChange={onTitleChange} placeholder="Title"></StyledModalTitle>
          <StyledModalPost as="textarea" onChange={onMessageChange} placeholder="Message"></StyledModalPost>
          <StyledStampOrDetail>
            <label>
              <input type="checkbox" id="needStampCheck" name="stamp" value="+Stamp" /><span>+STAMP</span>
            </label>
          </StyledStampOrDetail>
          <StyledStampOrDetail>
            <label>
              <input type="checkbox"  id="needDetailCheck" name="detail" value="+Detail" /><span>+DETAIL</span>
            </label>
          </StyledStampOrDetail>
        </form>
        <StyledSubmitPost as="button" type="button" className="btn btn-warning" name="addPost" onClick={onModalSubmit}>Add Post </StyledSubmitPost>
        <StyledSubmitPost as="button" type="button" className="btn btn-outline-warning" onClick={() => setShowModal(false)}>Cancel</StyledSubmitPost>
      </div>
    </StyledModal>

  );
};

export default AddPost;