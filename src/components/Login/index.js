import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import AppThemeContext from '../../context/AppThemeContext'

import {
  LoginBgContainer,
  FormContainer,
  AppLogo,
  InputContainer,
  InputLabel,
  UserNameAndPasswordInput,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(fetchedData.jwt_token)
    } else {
      this.onFailureLogin(fetchedData.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <LoginBgContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                onSubmit={this.onSubmitLogin}
                isDarkTheme={isDarkTheme}
              >
                <AppLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="app-logo"
                />
                <InputContainer>
                  <InputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </InputLabel>
                  <UserNameAndPasswordInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </InputLabel>
                  <UserNameAndPasswordInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onShowPassword}
                  />
                  <CheckboxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginBgContainer>
          )
        }}
      </AppThemeContext.Consumer>
    )
  }
}

export default Login
