import styled from 'styled-components'

export const SmButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  outline: none;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
export const ModalCloseBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 30px;
  align-self: flex-end;
  margin: 30px;
  color: ${props => (props.isThemeLight ? '#000000' : '#ffffff')};
`
export const HamPopup = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#181818')};
`

export const SectionList = styled.ul`
  list-style: none;
  padding-left: 0px;
`
export const ListButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => {
    if (props.isThemeLight) {
      return props.activeTab ? '#f1f1f1' : 'transparent'
    }
    return props.activeTab ? '#424242' : 'transparent'
  }};
  padding-left: 80px;
  border: 0px;
  width: 100%;
  outline: none;
  cursor: pointer;
`
export const Icon = styled.div`
  color: ${props => {
    if (props.isThemeLight) {
      return props.activeTab ? '#ff0000' : '#424242'
    }
    return props.activeTab ? '#ff0000' : '#cccccc'
  }};
  margin-right: 25px;
  font-size: 18px;
`
export const Text = styled.p`
  font-size: 15px;
  color: ${props => {
    if (props.isThemeLight) {
      return '#424242'
    }
    return '#cccccc'
  }};
  font-weight: ${props => (props.activeTab ? 'bold' : 'normal')};
`
