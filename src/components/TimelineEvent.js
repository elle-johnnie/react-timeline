import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
      <section>
          <h3>{props.person}</h3>
          <p>{props.status}</p>
          <p><Timestamp time={props.timeStamp} /></p>

      </section>
  )
};

export default TimelineEvent;
