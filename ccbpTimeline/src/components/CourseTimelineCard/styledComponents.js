// Style your elements here
import styled from 'styled-components'

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
// `

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   border: 3px solid red;
  width: ${props => (props.duration ? '70px' : '100%')};
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
export const TagsListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
  background-color: #0967d230;
  @media (max-width: 768px) {
    padding: 3px;
  }
`
