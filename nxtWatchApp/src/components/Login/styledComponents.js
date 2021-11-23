import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#231f20')};
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${props =>
    props.isThemeLight
      ? '3px 3px 10px #94a3b8, -3px -3px 10px #94a3b8'
      : 'none'};
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#0f0f0f')};
  @media (max-width: 768px) {
    width: 93%;
  }
`
export const LoginWebsiteLogo = styled.img`
  display: ${props => {
    if (props.isThemeLight && props.light) {
      return 'block'
    }
    if (!props.isThemeLight && props.dark) {
      return 'block'
    }
    return 'none'
  }};
  width: 45%;
  align-self: center;
  margin: 20px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const FormLabel = styled.label`
  color: ${props => (props.isThemeLight ? '#64748b' : '#ffffff')};
  font-family: 'ROBOTO';
  font-size: 13px;
`
export const LoginInput = styled.input`
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #94a3b8;
  padding: 8px;
  outline: none;
  color: ${props => (props.isThemeLight ? '#1e293b' : '#ffffff')};
  font-family: 'Bree Serif';
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#0f0f0f')};
`
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LoginButton = styled.button`
  height: 35px;
  border: 0px;
  border-radius: 5px;
  background-color: #3b82f6;
  font-weight: bold;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
export const ErrMsg = styled.p`
  color: red;
  font-size: 13px;
`
