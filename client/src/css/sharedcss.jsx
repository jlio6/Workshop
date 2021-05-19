import styled from 'styled-components';
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
    padding: 10px 20px;
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
  width: 40%;
  margin-left: 90px;
  padding: 60px 50px;
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
  flex: 0 1 300px;
`;

export const StyledDescriptImg = styled.img`
  width: 125px;
  display: block;
  margin: 20px auto;
`;

export const StyledDescriptPara = styled.p`
  font-size: 1.25em;
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