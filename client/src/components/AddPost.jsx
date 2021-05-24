import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';

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

const AddPost = ({ showModal, onOpenModalClick }) => {

  const onModalSubmit = (event) => {
    event.preventDefault();
  };

  const onRandom = () => {
    console.log('wtf');
  }

  return (
    <StyledModal showModal={showModal}>
      <div>
        <form onSubmit={onModalSubmit}>
          <StyledCategoriesDiv>
            <StyledModalCategories type="button" name="post" value="Post" />
            <StyledModalCategories type="button" name="images" value="Images" />
            <StyledModalCategories type="button" name="link" value="Link" />
          </StyledCategoriesDiv>
          <StyledModalTitle placeholder="Title"></StyledModalTitle>
          <StyledModalPost as="textarea" placeholder="Message"></StyledModalPost>
          <StyledStampOrDetail className="btn btn-outline" type="button" name="stamp" value="+Stamp" />
          <StyledStampOrDetail className="btn btn-outline" type="button" name="detail" value="+Detail" />
          <StyledSubmitPost type="button" className="btn btn-warning" onClick={onModalSubmit} name="addPost" value="Add Post" />
          <StyledSubmitPost type="button" className="btn btn-outline-warning" onClick={onOpenModalClick} name="cancel" value="Cancel" />
        </form>
      </div>
    </StyledModal>

  );
};

export default AddPost;