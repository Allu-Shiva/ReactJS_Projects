import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
`
export const GameContent = styled.div`
  display: flex;
  flex-grow: 1;
`
export const GameMainbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.isThemeLight ? '#f9f9f9' : '#0f0f0f')};
`
export const GameBanner = styled.div`
  font-size: 20px;
`
export const GameVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`
export const GameFlexContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isThemeLight ? '#f4f4f4' : ' #181818')};
  padding: 30px;
`
export const GameHeartContainer = styled.div`
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
export const GameText = styled.h1`
  color: ${props => (props.isThemeLight ? '#1e293b' : '#ffffff')};
  font-size: 30px;
  margin-left: 15px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const GameListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
