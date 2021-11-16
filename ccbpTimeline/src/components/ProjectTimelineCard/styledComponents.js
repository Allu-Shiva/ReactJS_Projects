// Style your elements here
import styled from 'styled-components'

export const ProjectFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.duration ? '50px' : '100%')};
  @media (max-width: 768px) {
    flex-direction: ${props => (props.duration ? 'row' : 'column')};
    align-items: ${props => (props.duration ? 'center' : 'flex-start')};
  }
`
export const CardHeading = styled.h1`
  color: #171f46;
  font-weight: bold;
  margin: 0px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #1e293b;
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const Linker = styled.a`
  color: #0967d2;
  font-weight: bold;
  text-decoration: none;
`
