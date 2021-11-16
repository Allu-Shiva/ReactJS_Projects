// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onPress} = props
  const {id, emojiName, emojiUrl} = emoji

  const onEmoji = () => {
    onPress(id)
  }

  return (
    <li className="listItem">
      <button type="button" testid="emoji" className="Btn" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EmojiCard
