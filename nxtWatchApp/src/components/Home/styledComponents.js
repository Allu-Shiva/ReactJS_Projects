import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
`
export const HomeContent = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Mainbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.isThemeLight ? '#f9f9f9' : '#181818')};
  @media (max-width: 768px) {
    min-height: 90vh;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: ${props => (props.shouldDisplayBanner ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
`
export const Thumbnail = styled.img`
  width: 150px;
`
export const Text = styled.p`
  color: #1e293b;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const FlexContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`
export const FakeButton = styled.div`
  border: 1px solid #212121;
  align-self: flex-start;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  align-self: flex-start;
  border: 0px;
  font-size: 22px;
  cursor: pointer;
  outline: none;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  color: ${props => (props.isThemeLight ? '#313131' : '#ffffff')};
  border: ${props =>
    props.isThemeLight ? '1px solid #cccccc' : '1px solid #313131'};
  padding: 5px;
  width: 30%;
  outline: none;
  background-color: ${props => (props.isThemeLight ? 'white' : '#181818')};
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  border: ${props =>
    props.isThemeLight ? '1px solid #cccccc' : '1px solid #313131'};
  color: #606060;
  cursor: pointer;
  background-color: ${props => (props.isThemeLight ? 'normal' : '#313131')};
  outline: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const FailureContainer = styled(LoaderContainer)`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 0.5;
  text-align: center;
  @media (max-width: 768px) {
    font-size: ${props => (props.para ? 'normal' : '13px')};
    line-height: 1;
    flex-grow: 1;
  }
`
export const FailureImg = styled.img`
  width: 35%;
`
export const FailureText = styled.h1`
  color: ${props => {
    if (props.isThemeLight) {
      return props.para ? '#616e7c' : '#1e293b'
    }
    return props.para ? ' #7e858e' : '#ffffff'
  }};
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: bold;
  padding: 5px;
  border: 0px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  outline: none;
`
export const ListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  //   justify-content: space-between;
  flex-wrap: wrap;
`
