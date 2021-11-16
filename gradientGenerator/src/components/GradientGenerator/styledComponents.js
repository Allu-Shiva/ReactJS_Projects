// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
  background-image: linear-gradient(
    to ${props => props.details.directionCopy},
    ${props => props.details.color1},
    ${props => props.details.color2}
  );
`

export const MainHeading = styled.h1`
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const Para = styled.p`
  color: #ededed;
`

export const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 35%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const FlexContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorBox = styled.input`
  cursor: pointer;
  width: 100px;
  height: 35px;
  padding: 0px;
  margin: 0px;
  outline: none;
  background-color: transparent;
  border: none;
`

export const CustomButton = styled.button`
  padding: 10px;
  border: 0px;
  margin-top: 30px;
  background-color: #00c9b7;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
