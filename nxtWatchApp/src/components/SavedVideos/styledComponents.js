import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
`
export const SavedContent = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Mainbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.isThemeLight ? '#f9f9f9' : '#0f0f0f')};
  @media (max-width: 768px) {
    min-height: 90vh;
  }
`
export const Banner = styled.div`
  font-size: 20px;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const FlexContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isThemeLight ? '#f4f4f4' : ' #181818')};
  padding: 30px;
`
export const FireContainer = styled.div`
  background-color: ${props => (props.isThemeLight ? '#e2e8f0' : '#0f0f0f')};
  font-size: 30px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-left: 30px;
  color: #ff0b37;
  @media (max-width: 576px) {
    margin-left: 5px;
  }
`
export const Text = styled.h1`
  color: ${props => (props.isThemeLight ? '#1e293b' : '#ffffff')};
  font-size: 30px;
  margin-left: 15px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const SavedListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
