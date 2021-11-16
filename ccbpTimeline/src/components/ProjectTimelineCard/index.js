// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectFlexContainer,
  CardHeading,
  Description,
  Thumbnail,
  Linker,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachItem

  return (
    <div>
      <Thumbnail src={imageUrl} alt="project image" />
      <ProjectFlexContainer>
        <CardHeading>{projectTitle}</CardHeading>
        <ProjectFlexContainer duration>
          <AiFillCalendar />
          <p>{duration}</p>
        </ProjectFlexContainer>
      </ProjectFlexContainer>
      <Description>{description}</Description>
      <Linker href={projectUrl}>Visit</Linker>
    </div>
  )
}

export default ProjectTimelineCard
