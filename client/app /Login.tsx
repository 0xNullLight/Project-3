/* This code creates a login page component for a web application. 
The purpose of this code is to display a simple login form where users 
can enter their username and password to access the application.*/

/* This is a presentational component, meaning it's responsible for how things look 
rather than how things work. The actual login functionality (what happens when the 
button is clicked) is not defined in this code snippet.*/

import styled from 'styled-components';

const LoginPage = () => {
  return (
    <PageWrapper>
      <Container>
        <TextBox 
          type="text" 
          placeholder="Username"
        />
        <TextBox 
          type="password"
          placeholder="Password" 
        />
        <LoginButton>Login</LoginButton>
      </Container>
    </PageWrapper>
  );
};

export default LoginPage;
