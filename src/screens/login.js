import React from 'react';
import styled from 'styled-components'
import {loginRequest} from '../requests';
import {SCREEN_NAMES} from '../App';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const FormLabel = styled.span`
  margin: 10px 10px 0;
`;
const FormError = styled(FormLabel)`
  color: #ff0000;
`;
const ERROR_TEXT = 'Please check your username and password and try logging in again';
const FormInput = styled.input`
  margin: 0 10px 10px;
  width: 100%;
  height: 50px;
  border: solid 2px darkblue;
  border-radius: 20px;
  padding: 0 10px;
  font-family: sans-serif;
  font-size: 15px;
`;
const SubmitButton = styled(FormInput)`
  width: 50%;
  margin: 10px;
  background-color: #ffffff;
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
        <FormLabel>Username:</FormLabel>
        <FormInput type='text' name='username' onChange={this.handleInput}/>
        <FormLabel>Password:</FormLabel>
        <FormInput type='password' name='password' onChange={this.handleInput}/>
        {this.state.error && <FormError>{ERROR_TEXT}</FormError>}
        <SubmitButton type='submit'/>
      </Form>
    );
  }
}