import styled from 'styled-components/macro'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f8fafc')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  border-radius: 10px;
`

export const AppLogo = styled.img`
  align-self: center;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#94a3b8')};
`

export const UserNameAndPasswordInput = styled.input`
  width: 300px;
  border: 1px solid #f1f5f9;
  border-radius: 5px;
  outline: none;
  padding: 15px;
  font-family: "Roboto"
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 350px;
    font-size: 15px;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  outline: none;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  padding-left: 5px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
`

export const LoginButton = styled.button`
  align-self: stretch;
  border: none;
  border-radius: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: -5px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0000;
  align-self: flex-start;
`
