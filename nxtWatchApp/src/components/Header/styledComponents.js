import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#313131')};
`
export const UnorderedContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
export const Thumbnail = styled.img`
  width: 130px;
  display: ${props => {
    if (props.isThemeLight && props.light) {
      return 'block'
    }
    if (!props.isThemeLight && props.dark) {
      return 'block'
    }
    return 'none'
  }};
`
export const CustomButton = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
  border: ${props => {
    if (props.outline) {
      return props.isThemeLight ? '1px solid #3b82f6' : '1px solid #ffffff'
    }
    return '0px'
  }};
  color: ${props => {
    if (props.outline) {
      return props.isThemeLight ? '#3b82f6' : '#ffffff'
    }
    return '#ffffff'
  }};
  font-weight: bold;
  padding: ${props => (props.outline ? '10px' : '12px')};
  border-radius: 5px;
  margin-left: 20px;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: ${props => (props.logout ? 'none' : 'block')};
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  margin-left: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  border-radius: 5px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${props => (props.isThemeLight ? '#ffffff' : '#313131')};
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupText = styled.p`
  color: ${props => (props.isThemeLight ? '#00306e' : '#ffffff')};
  font-weight: 500;
  margin-bottom: 40px;
`
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
