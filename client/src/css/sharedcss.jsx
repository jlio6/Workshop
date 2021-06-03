import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import stockWelcomeImg from '../../../assets/img/stock-welcome.jpg';
import stockArchImg from '../../../assets/img/architect.png';
import stockCranesImg from '../../../assets/img/cranes.png';

/////////////////////////////////////////
// STYLES FOR NAVBAR //
/////////////////////////////////////////

export const StyledBrand = styled.a`
  font-size: x-large;
  font-family: 'Pacifico', cursive;
`;

export const StyledNavbarNav = styled.ul`
  & > li {
    margin-left: 0px;
    padding: 7px 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    background-color: rgb(119, 119, 119);
  }
`;


/////////////////////////////////////////
// STYLES FOR WELCOME SECTION //
/////////////////////////////////////////


export const StyledWelcomeBody = styled.div`
  padding-bottom: 10%;
  padding-top: 10%;
  background-image: url(${stockWelcomeImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

export const StyledWelcomeSection = styled.section`
  max-width: 500px;
  margin-left: 90px;
  padding: 60px 50px;

  @media only screen and (max-width: 978px) {
    margin:0;
  }
}

`;



export const StyledSignupButton = styled.button`
  margin-right: 25px;
  border-radius: 5px;
  padding: 10px;
`;

export const StyledH1 = styled.h1`
  font-size: xxx-large;
  color: white;
  margin-bottom: 30px;
`;

export const StyledH4 = styled.h4`
  color: white;
  margin-bottom: 30px;
`;

export const StyledWelcomePic = styled.div`
  flex: 1 1 1200px;
  display: grid;
  place-items: center;
  background-size: cover;
  height: 400px;
  margin: 7.5px;
  border-radius: 15px;
  padding: 15px;
`;

export const StyledBGDiv = styled.div`
  margin: 0;
`;

export const StyledArchPic = styled(StyledWelcomePic)`
  background-image: url(${stockArchImg});
`;

export const StyledCranePic = styled(StyledWelcomePic)`
  background-image: url(${stockCranesImg});
`;

/////////////////////////////////////////
// STYLES FOR DESCRIPTION //
/////////////////////////////////////////

export const StyledDescriptDiv = styled.div`
  margin: 75px 30px;
  flex: 0 1 400px;

  @media only screen and (max-width: 978px) {
    margin: 30px;
  }
`;

export const StyledDescriptImg = styled.img`
  width: 125px;
  display: block;
  margin: 20px auto;
`;

export const StyledSubtitle = styled.p`
  font-size: 1.33em;
  text-align: center;
`;

export const StyledDescriptPara = styled.p`
  font-size: 1.1em;
  color: rgb(209, 209, 209);
  margin: 20px;
  text-align: center;
`;

export const StyledLearnMoreButton = styled(Link)`
  margin-bottom: 100px;
  margin-left: 40%;
  margin-right: 40%;
  padding: 10px;
  font-size: 1.5em;
  border-radius: 5px;
  flex: 0 0 20%;
`;

export const StyledFooter = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
`;

/////////////////////////////////////////
// STYLES FOR FORUMS SORTING/NEW POST //
/////////////////////////////////////////

export const StyledForumSort = styled.div`
  width: 50%;
  min-height: 60px;
  margin-top: 70px;
  margin-left: 15%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid orange;
`;

export const StyledFilterButton = styled.div`
  margin: 15px;
  border-radius: 20px;
  padding: 6px 15px;
  &: first-child {
    margin-left: 20px;
  }
`;

export const StyledSortIcon = styled.i`
  margin-right: 8px;
`;

export const StyledSortIconEllipsis = styled.i`
  border-radius: 50%;
  padding: 0;
`;

export const StyledAddPost = styled.form`
  width: 50%;
  min-height: 100px;
  margin-top: 0;
  margin-left: 15%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* background-color: rgb(41, 41, 41); */
  padding: 25px;
`;

export const StyledUserPic = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const StyledSortDropdown = styled.button`
  border-radius: 20px 0 0 20px;
  width: 200px;
`;

export const StyledNewPostButton = styled.button`
  color: rgb(134, 134, 134);
  width: 45%;
  text-align: left;
  border-radius: 0;
  &:hover {
    background-color: rgb(224, 224, 224);
    border-color: rgb(223, 223, 223);
  }
`;

export const StyledPostSubmit = styled.button`
  border-radius: 0 20px 20px 0;
  &:hover {
    box-shadow: 0 0 10px rgb(121, 101, 79);
  }
`;

/////////////////////////////////////////
// STYLES FOR FORUMS THREADS //
/////////////////////////////////////////

export const StyledLoadingIcon = styled.i`
  margin-top: 40px;
  margin-left: 37%;
`;

export const StyledPostDiv = styled(StyledAddPost)`
  display: grid;
  grid-template-columns: repeat(8, 12.5% [col-start]);
  grid-template-rows: [rline1] 50px [rline2] minmax(40px, auto) [rline3] 40px [rline4];
  padding: 20px 30px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: rgb(211, 211, 211);
  font-size: 0.9em;
  place-items: center;
`;

export const StyledUpvote = styled.i`
  // font-size: 15px;
  // padding-right: 0;
  // margin-top: 2px;
  // margin-right: 0;
`;

export const StyledPostSummary = styled.a`
  grid-column: 2/8;
  grid-row: 1;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  justify-self: start;
`;

export const StyledQuestionBody = styled.p`
  grid-column: 2/8;
  grid-row: rline2;
`;

export const StyledDivider = styled.hr`
  border: none;
  border-bottom: 2px solid #575757;
  grid-row: rline3;
  align-self: start;
  grid-column: 1 / 8;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
`;

export const StyledCommentDiv = styled.div`
  grid-column: 1;
  grid-row: rline3;
  align-self: center;
  justify-self: start;
`;

export const StyledCommentIcon = styled.i`
  font-size: 15px;
  padding-right: 0;
  margin-top: 2px;
  margin-right: 0;
`;

export const StyledUsername = styled.span`
  grid-column: 6 / 8;
  grid-row: rline3;
  justify-self: end;
  align-self: center;
  color: blue;
`;

export const StyledUserPicSmall = styled(StyledUserPic)`
  width: 15px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const StyledStampWrapper = styled.div`
  grid-row: rline1;
  grid-column: 8;
`;

export const StyledDetailWrapper = styled.div`
  grid-row: rline2;
  grid-column: 8;
`;

export const StyledClientIcons = styled.img`
  position: relative;
  width: 30px;
  top: 40px;
  left: 30px;
`;

export const StyledIconLabel = styled.p`
  visibility: hidden;
  position: relative;
`;

/////////////////////////////////////////
// STYLES FOR FORUMS MODAL //
/////////////////////////////////////////

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  & > div {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(50, 50, 50);
    border-radius: 5px;
    padding: 2em;
    opacity: 1;
  }
`;

export const StyledModalTitle = styled.input`
  display: block;
  margin-top: 10px;
  background-color: rgb(70, 70, 70);
  border-radius: 3px;
  padding-left: 5px;
  border: none;
  width: 100%;
  font-weight: 100;
  color: rgb(235,235,235);
  &:focus {
    outline: none;
  }
`;

export const StyledModalPost = styled(StyledModalTitle)`
  height: 8rem;
`;

export const StyledCategoriesDiv = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
`;

export const StyledModalCategories = styled.input`
  color: white;
  background-color: rgb(70, 70, 70);
  &:hover {
    background-color: rgb(110, 110, 110);
  }
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  padding: 15px 24px;
  z-index: 1;
  position: relative;
  flex: 1;
  text-align: center;
  border-color: gray;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStampOrDetail = styled.button`
  margin-top: 8px;
  margin-right: 8px;
  z-index: 1;
  position: relative;
  border: 1px solid gray;
  color: gray;
  fill: gray;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  text-transform: uppercase;
  &:focus {
    outline: none;
    background-color: #f0ad4e;
  }
`;

export const StyledSubmitPost = styled.input`
  margin-top: 8px;
  margin-right: 8px;
  z-index: 1;
  float: right;
  // position: relative;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  text-transform: uppercase;
`;
