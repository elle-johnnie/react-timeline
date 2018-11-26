import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent'
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);
      const TimelineEventComponents = timelineData["events"].map((event) =>{
          return <TimelineEvent
              person={event.person}
              status={event.status}
              timeStamp={event.timeStamp}
              key={event.id}/>

      });

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
            {TimelineEventComponents}
        </main>
      </div>
    );
  }
}

export default App;
