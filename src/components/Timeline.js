import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timelineData from "../data/timeline";

const Timeline = () => {
  // Fill in your code here
    const tlevents = timelineData["events"].map((event) =>{
        return <TimelineEvent
            person={event.person}
            status={event.status}
            timeStamp={event.timeStamp}
            key={event.id}/>

    });
  return(
      <section>
          {tlevents}
      </section>

)
};

export default Timeline;
