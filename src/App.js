import React from 'react';
import styled from 'styled-components'
import Login from './screens/login';
import Welcome from './screens/welcome';
import logo from './img/sparkol-black.png';

export const SCREEN_NAMES = {
  LOGIN: 'login',
  WELCOME: 'welcome'
};

const Container = styled.div`
  align-items: center;
  padding: 20px;
  max-width: 50%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;
  font-size: 15px;
`;
const Logo = styled.img`
  width: 250px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: SCREEN_NAMES.LOGIN,
      name: ''
    }
  }

  handleScreenSwitch = (nextScreen, newName) => {
    this.setState({screen: nextScreen, name: newName});
  }

  displaySelectedScreen() {
    switch(this.state.screen) {
      case SCREEN_NAMES.LOGIN:
        return <Login
          onSwitchScreen={this.handleScreenSwitch}
        />;
      case SCREEN_NAMES.WELCOME:
        return <Welcome
          name={this.state.name}
          onSwitchScreen={this.handleScreenSwitch}
        />;
      default:
        return null;
    }
  }

  render() {
    return (
      <Container>
        <Logo src={logo} alt='Logo' />
        {this.displaySelectedScreen()}
      </Container>
    );
  }
}

export default App;
