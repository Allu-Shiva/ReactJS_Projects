import {Component} from 'react'

import {
  Container,
  InputContainer,
  FormContainer,
  Heading,
  FlexContainer,
  Label,
  Input,
  CustomButton,
  MemeContainer,
  MemeHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    memePage: null,
  }

  onUrl = event => this.setState({imgUrl: event.target.value})

  onTopText = event => this.setState({topText: event.target.value})

  onBottomText = event => this.setState({bottomText: event.target.value})

  onFontSize = event => this.setState({fontSize: event.target.value})

  onGenerateMeme = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    const page = (
      <MemeContainer data-testid="meme" url={imgUrl}>
        <MemeHeading fontSize={fontSize}>{topText}</MemeHeading>
        <MemeHeading fontSize={fontSize}>{bottomText}</MemeHeading>
      </MemeContainer>
    )
    this.setState({memePage: page})
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, memePage} = this.state

    return (
      <div>
        <Heading>Meme Generator</Heading>
        <Container>
          <InputContainer>
            <FormContainer as="form">
              <FlexContainer>
                <Label htmlFor="imgUrl">Image URL</Label>
                <Input
                  type="text"
                  id="imgUrl"
                  placeholder="Enter the Image Url"
                  value={imgUrl}
                  onChange={this.onUrl}
                />
              </FlexContainer>
              <FlexContainer>
                <Label htmlFor="topText">Top Text</Label>
                <Input
                  type="text"
                  id="topText"
                  placeholder="Enter the Top Text"
                  value={topText}
                  onChange={this.onTopText}
                />
              </FlexContainer>
              <FlexContainer>
                <Label htmlFor="bottomText">Bottom Text</Label>
                <Input
                  type="text"
                  id="bottomText"
                  placeholder="Enter the Bottom Text"
                  value={bottomText}
                  onChange={this.onBottomText}
                />
              </FlexContainer>
              <FlexContainer>
                <Label htmlFor="fontSize">Font Size</Label>
                <Input
                  as="select"
                  value={fontSize}
                  onChange={this.onFontSize}
                  id="fontSize"
                >
                  {fontSizesOptionsList.map(eachOption => (
                    <option
                      value={eachOption.optionId}
                      key={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </Input>
              </FlexContainer>
              <CustomButton type="submit" onClick={this.onGenerateMeme} small>
                Generate
              </CustomButton>
            </FormContainer>
          </InputContainer>
          {memePage}
        </Container>
        <CustomButton type="submit" onClick={this.onGenerateMeme}>
          Generate
        </CustomButton>
      </div>
    )
  }
}

export default MemeGenerator
