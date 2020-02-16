import React from 'react';
import styled from 'styled-components'
import {loginRequest} from '../requests';
import {SCREEN_NAMES} from '../App';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const FormLabel = styled.span`
  width: 50%;
  margin: 10px;
`;
const FormError = styled(FormLabel)`
  color: #ff0000;
`;
const ERROR_TEXT = 'Please check your username and password and try logging in again';
const FormInput = styled.input`
  width: 50%;
  margin: 10px;
`;
const SubmitButton = styled.input`
  width: 30%;
  margin: 10px;
  background-color: #ff00ff;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false
    }
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value, error: false});
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    const {username, password} = this.state;
    const success = await loginRequest(username, password);
    if (success) {
      this.props.onSwitchScreen(SCREEN_NAMES.WELCOME, username);
    } else {
      this.setState({password: '', error: true})
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <FormLabel>Enter your username:</FormLabel>
        <FormInput type='text' name='username' onChange={this.handleInput}/>
        <FormLabel>Enter your password:</FormLabel>
        <FormInput type='password' name='password' onChange={this.handleInput}/>
        {this.state.error && <FormError>{ERROR_TEXT}</FormError>}
        <SubmitButton type='submit'/>
      </Form>
    );
  }
}