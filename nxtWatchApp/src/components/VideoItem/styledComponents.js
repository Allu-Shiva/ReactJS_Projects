import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 250px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
    // height: 100%;
  }
`
export const Thumbnail = styled.img`
  width: 250px;
  height: 150px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`
export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => (props.card ? 'center' : 'stretch')};
`
export const ChannelThumbnail = styled.img`
  width: 35px;
  align-self: flex-start;
  margin-right: 5px;
`
export const VideoContent = styled.div`
  line-height: 1;
  display: flex;
  flex-direction: column;
`
export const Text = styled.p`
  font-size: ${props => (props.titleText ? '13px' : '12px')};
  color: ${props => {
    if (props.isThemeLight) {
      return props.titleText ? '#475569' : ' #7e858e'
    }
    return props.titleText ? '#ffffff' : '#64748b'
  }};
  font-weight: 401;
  margin-top: ${props => (props.card ? 'normal' : '0px')};
`
