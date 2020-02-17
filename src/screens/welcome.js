import React from 'react';
import styled from 'styled-components'
import {SCREEN_NAMES} from '../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const WelcomeText = styled.span`
  margin: 50px 10px 10px;
  font-family: sans-serif;
  font-size: 15px;
`;
const Logout = styled.button`
  font-family: sans-serif;
  font-size: 15px;
  width: 50%;
  margin: 10px;
  background-color: #ffffff;
  height: 50px;
  border: solid 2px darkblue;
  border-radius: 20px;
  padding: 0 10px;
  bottom: 10px;
  position: absolute;
`;

function Welcome(props) {
  return (
    <Container>
      <WelcomeText>Welcome {props.name}</WelcomeText>
      <Logout onClick={() => props.onSwitchScreen(SCREEN_NAMES.LOGIN)}>Logout</Logout>
    </Container>
  );
}
export default Welcome;