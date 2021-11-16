// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem, onBtnClick} = props
  const {id, questionText, answerText, showAnswer} = eachItem
  const imgUrl = showAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const answerSlice = (
    <div>
      <hr className="hr-line" />
      <p className="answerText">{answerText}</p>
    </div>
  )

  const showHideAnswer = () => onBtnClick(id)

  return (
    <li className="listItem">
      <div className="questionContainer">
        <h1 className="questionText">{questionText}</h1>
        <button type="button" className="btn" onClick={showHideAnswer}>
          <img src={imgUrl} alt={showAnswer ? 'minus' : 'plus'} />
        </button>
      </div>
      {showAnswer && answerSlice}
    </li>
  )
}

export default FaqItem
