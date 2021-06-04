import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
// import styled from 'styled-components';

import { Modal, StyledCategoriesDiv, StyledModalCategories, StyledModalTitle, StyledModalPost, StyledStampOrDetail, StyledSubmitPost } from '../css/sharedcss.jsx';

// const StyledModal = styled(Modal)`
//   ${(props) => {
//     if (!props.showModal) {
//       return `
//         visibility: hidden;
//       `;
//     } else {
//       return `
//         visibility: visible;
//       `;
//     }
//   }}
// `;

const AddPostCopy = ({ showModal, setShowModal, onOpenModalClick }) => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPostCopy;