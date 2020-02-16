import React from 'react';
import styled from 'styled-components'
import Login from './screens/login';
import Welcome from './screens/welcome';

export const SCREEN_NAMES = {
  LOGIN: 'login',
  WELCOME: 'welcome'
};

const Container = styled.div`
  text-align: center;
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
        Hello World
        {this.displaySelectedScreen()}
      </Container>
    );
  }
}

export default App;
