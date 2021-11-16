// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const InputContainer = styled.div`
  width: 50%;
  padding: 30px;
  //   border: 3px solid red;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const FormContainer = styled(InputContainer)`
  padding: 0px;
`

export const Heading = styled.h1`
  color: #35469c;
  padding-left: 30px;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: flex-start;
`

export const Label = styled.label`
  color: #5a7184;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 2px solid #7e858e;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  color: #5a7184;
  margin-bottom: 20px;
  background-color: transparent;
`
export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: 0px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  margin-left: ${props => (props.small ? 'none' : '30px')};
  display: ${props => (props.small ? 'none' : 'block')};
  @media (max-width: 768px) {
    display: ${props => (props.small ? 'block' : 'none')};
  }
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  max-width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //   border: 3px solid red;
  flex-grow: 1;
  @media (max-width: 768px) {
    height: 300px;
  }
`

export const MemeHeading = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
