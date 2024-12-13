/* The purpose of this code is to display a consistent welcome page layout with a 
logo, heading text, and two buttons (primary and secondary). It's built to be 
reusable, meaning you can easily change the text, logo, and button actions without 
changing the design.*/

/* The component takes six inputs through its props:
logoSrc: The image source for the logo
headingText: The main text to display
primaryButtonText: Text for the main action button
secondaryButtonText: Text for the secondary button
onPrimaryClick: Function to run when primary button is clicked
onSecondaryClick: Function to run when secondary button is clicked
*/

/* The code focuses on presentation and layout rather than complex data 
transformations. It's primarily about creating a consistent, professional-looking 
welcome screen that can be easily customized through props.*/

import React from 'react';
import styled from 'styled-components';

// part of larger layout of page
const Page = styled.div`
  position: absolute;
  top: -1169px;
  left: 7502px;
  width: 1920px;
  height: 1204px;
  // background color of page (dark grey)
  background: #111518;
`;

// container for logo
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 99px;
  background: #111518;
  border-radius: 0;
  box-shadow: 0 0 1px rgba(23, 26, 31, 0.07),
              0 0 2px rgba(23, 26, 31, 0.12);
`;
// logo image
const Logo = styled.img`
  position: absolute;
  top: 33px;
  left: 60px;
  width: 33px;
  height: 33px;
  border-radius: 6px;
`;
// heading text
const Heading = styled.h1`
  position: absolute;
  top: 254px;
  left: 281px;
  width: 1267px;
  font-family: Archivo;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  color: #A1A5A7;
`;
// button styling and secondary button styling
const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  position: absolute;
  padding: 0 20px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  opacity: 1;
  cursor: pointer;

  ${props => props.variant === 'primary' && `
    top: 407px;
    left: 557px;
    width: 716px;
    color: #B6DEFB;
    background: #2095F4;

    &:hover, &:active {
      color: #B6DEFB;
      background: #2095F4;
    }
  `}


  ${props => props.variant === 'secondary' && `
    top: 20px;
    left: 1726px;
    width: 125px;
    color: #BFC6CB;
    background: #28323A;

    &:hover, &:active {
      color: #BFC6CB;
      background: #28323A;
    }
  `}

  &:disabled {
    opacity: 0.4;
  }
`;

// props for welcome screen
interface WelcomeScreenProps {
  logoSrc: string;
  headingText: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  logoSrc,
  headingText,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <Page>
      <Container>
        <Logo src={logoSrc} alt="Logo" />
        <Button variant="secondary" onClick={onSecondaryClick}>
          {secondaryButtonText}
        </Button>
      </Container>
      <Heading>{headingText}</Heading>
      <Button variant="primary" onClick={onPrimaryClick}>
        {primaryButtonText}
      </Button>
    </Page>
  );
};

export default WelcomeScreen;
