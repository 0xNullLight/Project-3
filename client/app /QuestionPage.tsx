/* This code creates a web page component that displays a form for collecting questions 
from users. It's built using React and styled-components for styling.*/

/* Purpose: The code builds a page with a header and a main section 
containing five question input fields and a submit button. It's designed to collect 
multiple questions from users in a clean, modern interface.*/

import styled from 'styled-components';

const Page = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #1D2128;
`;

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 101px;
  background: #1D2128;
  box-shadow: 0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12);
  display: flex;
  align-items: center;
  padding: 0 91px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 6px;
`;

const HeaderTitle = styled.h1`
  font-family: Archivo, sans-serif;
  font-size: 21px;
  line-height: 32px;
  font-weight: 700;
  color: #FFF;
  margin-left: 17px;
`;

const MainContainer = styled.main`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 101px);
  background: #323842;
  border: 1px solid #323842;
  border-radius: 2px;
  box-shadow: 0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12);
  padding: 52px 38px;
`;

const TextInput = styled.input`
  width: 1180px;
  height: 78px;
  padding: 0 20px;
  font-family: Inter, sans-serif;
  font-size: 20px;
  line-height: 31px;
  background: #1D2128;
  border-radius: 16px;
  border: 1px solid #40484D;
  color: #879198;
  outline: none;

  &:hover, &:focus {
    background: #1C2226;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

const Button = styled.button`
  width: 147px;
  height: 47px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  line-height: 34px;
  color: #BFC6CB;
  background: #28323A;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

const QuestionsPage = () => {
  return (
    <Page>
      <Header>
        <Logo src="/logo.png" alt="Logo" />
        <HeaderTitle>Questions</HeaderTitle>
        <Button style={{marginLeft: 'auto'}}>Action</Button>
      </Header>
      
      <MainContainer>
        <form>
          <div>
            <TextInput placeholder="Question 1" />
          </div>
          <div style={{marginTop: '20px'}}>
            <TextInput placeholder="Question 2" />
          </div>
          <div style={{marginTop: '20px'}}>
            <TextInput placeholder="Question 3" />
          </div>
          <div style={{marginTop: '20px'}}>
            <TextInput placeholder="Question 4" />
          </div>
          <div style={{marginTop: '20px'}}>
            <TextInput placeholder="Question 5" />
          </div>
          
          <Button style={{marginTop: '40px', marginLeft: 'auto'}}>
            Submit
          </Button>
        </form>
      </MainContainer>
    </Page>
  );
};

export default QuestionsPage;
