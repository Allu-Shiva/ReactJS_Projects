// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.ccbp ? '#2b237c' : '#171f46')};
  font-weight: ${props => (props.ccbp ? 'bold' : 'normal')};
  font-size: ${props => (props.ccbp ? '24px' : '18px')};
  width: 150px;
  line-height: ${props => (props.ccbp ? '3' : '1')};
  text-align: center;
`
export const TimelineContainer = styled.div`
  width: 60%;
  min-height: 100vh;
  @media (max-width: 768px) {
    width: 100%;
  }
`
