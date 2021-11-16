// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #161625;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 10px;
`
export const CowinContainer = styled.div`
  width: 80%;
  margin: auto;
`
export const WebsiteLogo = styled.img`
  width: 50px;
  margin-right: 10px;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
export const WebsiteTitle = styled.h1`
  font-size: ${props => (props.MainHeading ? '28px' : '22px')};
  color: ${props => (props.MainHeading ? '#cbd5e1' : '#2cc6c6')};
`

export const LoaderContainer = styled.div`
  text-align: center;
`
export const FailureImg = styled.img`
  width: 50%;
`
export const FailureContainer = styled(LoaderContainer)`
  justify-content: center;
  color: white;
  font-family: 'Open Sans';
`
