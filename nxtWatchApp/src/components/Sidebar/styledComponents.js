import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#313131')};
  width: 20%;
  padding-top: 30px;
  min-height: 89.7vh;
  flex-shrink: 0;
  @media (max-width: 758px) {
    display: none;
  }
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
  padding-left: 10px;
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
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const FooterText = styled.p`
  color: ${props => {
    if (props.isThemeLight) {
      return props.desc ? '#475569' : '#1e293b'
    }
    return '#ffffff'
  }};
  font-weight: ${props => (props.desc ? '500' : 'bold')};
  margin-top: 30px;
`
export const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`
export const FooterImg = styled.img`
  width: 30px;
  margin-right: 10px;
`
