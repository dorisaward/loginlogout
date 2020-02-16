import React from 'react';
import styled from 'styled-components'
import {SCREEN_NAMES} from '../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const WelcomeText = styled.span`
  margin: 10px;
`;
const Logout = styled.button`
  color: #ff0000;
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