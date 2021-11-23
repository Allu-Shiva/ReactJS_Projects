import styled from 'styled-components'

export const VIDContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const VIDContent = styled.div`
  display: flex;
  flex-grow: 1;
`
export const VIDMainbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-grow: 1;
  background-color: ${props => (props.isThemeLight ? '#f9f9f9' : '#0f0f0f')};
`

export const VIDText = styled.p`
  color: ${props => {
    if (props.isThemeLight) {
      return props.titleText ? '#1e293b' : ' #7e858e'
    }
    return props.titleText || props.desc ? '#ffffff' : '#64748b'
  }};
  font-size: ${props => (props.titleText ? '18px' : '14px')};
  font-weight: 401;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const VIDVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  //   border: 1px solid red;
`
export const PlayerContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 5px;
  @media (max-width: 768px) {
    height: 250px;
  }
`
export const VIDFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Btn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  border: 0px;
  background-color: transparent;
  color: ${props => (props.activeStatus ? '#2563eb ' : '#64748b')};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
export const HrLine = styled.hr`
  width: 100%;
  border-color: ${props => {
    if (props.isThemeLight) {
      return '#f8fafc'
    }
    return '#64748b'
  }};
`
export const VIDChannelContainer = styled.div`
  margin-top: 20px;
  display: flex;
  display: ${props => (props.sm ? 'none' : 'flex')};
  @media (max-width: 768px) {
    display: ${props => (props.sm ? 'block' : 'none')};
  }
`
export const VIDProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const VIDThumbnail = styled.img`
  width: 45px;
  margin-right: 15px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  @media (max-width: 768px) {
    height: 100%;
  }
`
export const VIDDescText = styled(VIDText)`
  font-size: ${props => (props.titleText || props.desc ? '15px' : '13px')};
  font-weight: 401;
  margin-top: 0px;
`
