import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent'
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);
    const person = timelineData["person"]
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{person}'s Social Media Feed</h1>
        </header>
        <main className="App-main">
            <Timeline/>
        </main>
      </div>
    );
  }
}

export default App;
