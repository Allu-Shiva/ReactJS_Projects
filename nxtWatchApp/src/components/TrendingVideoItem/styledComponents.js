import styled from 'styled-components'

export const TrendListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  margin-right: 10px;

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`
export const TrendThumbnail = styled.img`
  width: 400px;
  height: 250px;

  @media (max-width: 576px) {
    width: 100%;
    height: 70%;
  }
`
export const TrendFlexContainer = styled.div`
  display: flex;
  align-items: ${props => (props.card ? 'center' : 'stretch')};
`

export const TrendVideoContent = styled.div`
  line-height: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  @media (max-width: 576px) {
    margin-top: 15px;
  }
`
export const TrendText = styled.p`
  font-size: ${props => (props.titleText ? '20px' : '14px')};
  color: ${props => {
    if (props.isThemeLight) {
      return props.titleText ? '#475569' : ' #7e858e'
    }
    return props.titleText ? '#ffffff' : '#64748b'
  }};
  font-weight: 401;
  margin-top: ${props => (props.card ? 'normal' : '0px')};
  display: ${props => (props.sm ? 'none' : 'block')};
  @media (max-width: 576px) {
    font-size: ${props => (props.titleText ? '15px' : '12px')};
    display: ${props => (props.md ? 'none' : 'block')};
    line-height: 1;
  }
`
export const TrendChannelThumbnail = styled.img`
  width: 35px;
  align-self: center;
  margin-right: 5px;
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`
