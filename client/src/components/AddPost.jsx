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

const AddPost = ({ showModal, setShowModal, onOpenModalClick }) => {

  const onModalSubmit = (event) => {
    alert('A form was submitted');
    event.preventDefault();
  };

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
          <StyledStampOrDetail>
            <label>
              <input type="checkbox" name="stamp" value="+Stamp" /><span>+STAMP</span>
            </label>
          </StyledStampOrDetail>
          <StyledStampOrDetail>
            <label>
              <input type="checkbox" name="detail" value="+Detail" /><span>+DETAIL</span>
            </label>
          </StyledStampOrDetail>
          <StyledSubmitPost type="submit" className="btn btn-warning" name="addPost" value="Add Post" />
          <input type="submit" value="Submit" />
        </form>
        <StyledSubmitPost as="button" type="button" className="btn btn-outline-warning" onClick={() => setShowModal(false)}>Cancel</StyledSubmitPost>
      </div>
    </StyledModal>

  );
};

export default AddPost;