/* This code defines the visual styling for a login page*/

/* imports from package*/
import styled from 'styled-components';

/* page wrapper*/
export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #323842;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* container that holds form elements*/
export const Container = styled.div`
  width: 700px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(23, 26, 31, 0.07),
              0px 0px 2px rgba(23, 26, 31, 0.12);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* this is the text box field for the user to enter their info*/
export const TextBox = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  font-family: Inter, sans-serif;
  font-size: 34px;
  line-height: 52px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:hover, &:focus {
    color: #5C5E70;
    border-color: #6C6794;
  }

  &:disabled {
    color: #5C5E70;
    opacity: 0.4;
  }
`;

/* login button with hover and active states*/
export const LoginButton = styled.button`
  width: 100%;
  height: 92px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 34px;
  line-height: 52px;
  font-weight: 400;
  color: #fff;
  background: #6C6794;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: #5d578f;
  }

  &:active {
    background: #4e4977;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
