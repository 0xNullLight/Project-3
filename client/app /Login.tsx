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
