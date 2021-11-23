import styled from 'styled-components'

export const GameListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 250px;
  margin-right: 10px;
  @media (max-width: 576px) {
    width: 46%;
  }
`
export const GameThumbnail = styled.img`
  margin-bottom: 10px;
  @media (max-width: 576px) {
    width: 100%;
    height: 60%;
  }
`

export const GameVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const GameText = styled.p`
  font-size: ${props => (props.titleText ? '18px' : '15px')};
  color: ${props => {
    if (props.isThemeLight) {
      return props.titleText ? '#475569' : ' #7e858e'
    }
    return props.titleText ? '#ffffff' : '#64748b'
  }};
  font-weight: 401;
  margin-top: ${props => (props.card ? 'normal' : '0px')};
`
