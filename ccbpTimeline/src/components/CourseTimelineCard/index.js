// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  FlexContainer,
  CardHeading,
  Description,
  TagsListContainer,
  ListItem,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem

  return (
    <div>
      <FlexContainer>
        <CardHeading>{courseTitle}</CardHeading>
        <FlexContainer duration>
          <AiFillClockCircle />
          <p>{duration}</p>
        </FlexContainer>
      </FlexContainer>
      <Description>{description}</Description>
      <TagsListContainer>
        {tagsList.map(listItem => (
          <li key={listItem.id}>
            <ListItem>{listItem.name}</ListItem>
          </li>
        ))}
      </TagsListContainer>
    </div>
  )
}

export default CourseTimelineCard
