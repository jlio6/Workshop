import styled from 'styled-components';
import { Link } from "react-router-dom";
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

export const StyledNavLink = styled(Link)`
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
  margin-right: 15px;
  border-radius: 15px;
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

export const StyledDescriptPara = styled.p`
  font-size: 1.33em;
  margin: 50px 20px 20px 20px;
  text-align: center;
`;

export const StyledLearnMoreButton = styled.button`
  margin-bottom: 100px;
  margin-left: 40%;
  margin-right: 40%;
  padding: 15px;
  font-size: 1.5em;
  border-radius: 15px;
  flex: 0 0 90%;
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