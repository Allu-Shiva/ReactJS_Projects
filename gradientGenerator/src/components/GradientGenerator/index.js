import {Component} from 'react'

import {
  Container,
  MainHeading,
  Para,
  UnorderedList,
  FlexContainer,
  ColorContainer,
  ColorBox,
  CustomButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    directionCopy: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color1Copy: '#8ae323',
    color2: '#014f7b',
    color2Copy: '#014f7b',
  }

  onTabClick = activeTab => this.setState({direction: activeTab})

  onChangeColor1 = event => this.setState({color1Copy: event.target.value})

  onChangeColor2 = event => this.setState({color2Copy: event.target.value})

  onGenerate = () => {
    const {color1Copy, color2Copy, direction} = this.state
    this.setState({
      color1: color1Copy,
      color2: color2Copy,
      directionCopy: direction,
    })
  }

  render() {
    const {
      direction,
      directionCopy,
      color1,
      color1Copy,
      color2,
      color2Copy,
    } = this.state

    return (
      <Container
        details={{directionCopy, color1, color2}}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Para>Choose Direction</Para>
        <UnorderedList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              eachItem={eachItem}
              direction={direction}
              onTabClick={this.onTabClick}
            />
          ))}
        </UnorderedList>
        <Para>Pick the Colors</Para>
        <FlexContainer>
          <ColorContainer>
            <Para>{color1Copy}</Para>
            <ColorBox
              type="color"
              value={color1Copy}
              onChange={this.onChangeColor1}
            />
          </ColorContainer>
          <ColorContainer>
            <Para>{color2Copy}</Para>
            <ColorBox
              type="color"
              value={color2Copy}
              onChange={this.onChangeColor2}
            />
          </ColorContainer>
        </FlexContainer>
        <CustomButton type="button" onClick={this.onGenerate}>
          Generate
        </CustomButton>
      </Container>
    )
  }
}

export default GradientGenerator
