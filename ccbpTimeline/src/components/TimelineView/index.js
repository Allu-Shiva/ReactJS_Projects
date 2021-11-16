// Write your code here
// import {Components} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import {BgContainer, MainHeading, TimelineContainer} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <BgContainer>
      <MainHeading>
        MY JOURNEY OF{' '}
        <MainHeading as="span" ccbp>
          CCBP 4.0
        </MainHeading>
      </MainHeading>
      <TimelineContainer>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: '#ffffff',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={eachItem.id} eachItem={eachItem} />
              )
            }
            return <ProjectTimelineCard key={eachItem.id} eachItem={eachItem} />
          })}
        </Chrono>
      </TimelineContainer>
    </BgContainer>
  )
}

export default TimelineView
