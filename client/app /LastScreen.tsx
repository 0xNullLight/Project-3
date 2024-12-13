/* styled-components  for the last page of application */

import styled from 'styled-components';

/* page wrapper */
const PageWrapper = styled.div`
  position: absolute;
  top: -1208px;
  left: 9686px;
  width: 1920px;
  height: 1201px;
  background: #323842;
`;
/* Creates a large prominant title text*/
const Title = styled.h1`
  position: absolute;
  top: 88px;
  left: 262px;
  font-family: Archivo;
  font-size: 40px;
  line-height: 56px;
  font-weight: 700;
  color: #FFF;
`;

/* Component maintains consistent secondary headings*/
const Subtitle = styled.h2`
  position: absolute;
  top: 174px;
  left: 262px;
  font-family: Archivo;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #787F85;
`;

/* Component maintains consistent text content across the page*/
const TextContent = styled.p<{ top: number; color: string }>`
  position: absolute;
  top: ${props => props.top}px;
  left: 262px;
  font-family: Archivo;
  font-size: 21px;
  line-height: 32px;
  font-weight: 700;
  color: ${props => props.color};
  width: ${props => props.width || 'auto'};
`;

/* Buttons are used to navigate the user to the next page*/
const Button = styled.button<{ primary?: boolean }>`
  position: absolute;
  top: 562px;
  left: ${props => props.primary ? '1504px' : '1258px'};
  width: ${props => props.primary ? '125px' : '230px'};
  height: ${props => props.primary ? '62px' : '60px'};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
  color: ${props => props.primary ? '#FFF' : '#D5D9DA'};
  background: ${props => props.primary ? '#2094F3' : '#28313A'};
  opacity: 1;
  border-radius: ${props => props.primary ? '31px' : '30px'};
  border: ${props => props.primary ? '1px solid #19639C' : 'none'};

  &:hover {
    color: ${props => props.primary ? '#FFF' : '#D5D9DA'};
    background: ${props => props.primary ? '#2094F3' : '#28313A'};
  }

  &:disabled {
    opacity: 0.4;
  }
`;
/* defines a React component called LastScreen that creates a structured page layout with various text elements and buttons.*/
const LastScreen = () => {
  return (
    <PageWrapper>
      <Title>Your Title Here</Title>
      <Subtitle>Your Subtitle Here</Subtitle>
      <TextContent top={248} color="#D5D9DA">First text content</TextContent>
      <TextContent top={324} color="#787F85">Second text content</TextContent>
      <TextContent top={392} color="#FFF">Third text content</TextContent>
      <TextContent top={454} color="#C9CDCF" width="1133px">
        Fourth text content
      </TextContent>
      
      <Button>Secondary Button</Button>
      <Button primary>Primary</Button>
    </PageWrapper>
  );
};

export default LastScreen;
