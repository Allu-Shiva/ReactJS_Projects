// Style your elements here
import styled from 'styled-components'

export const ListItemButton = styled.button`
  padding: 10px;
  color: #334155;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  width: 100px;
  background-color: white;
  opacity: ${props => (props.activeTab ? 1 : 0.5)};
  margin-bottom: 10px;
  border: 0px;
  cursor: pointer;
  outline: none;
  @media (max-width: 768px) {
    width: 140px;
  }
`
