import React, { useState } from 'react';
import { Break } from './features/break/Break';
import { Session } from './features/session/Session';
import { Timer } from './features/timer/Timer';
import './App.css';
import Context from './context/Context';

function App() {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
  const [time, setTime] = useState(sessionLength);
  const [timerType, setTimerType] = useState('Session');

  return (
    <Context.Provider value={{
      breakLength, setBreakLength,
      sessionLength, setSessionLength,
      time, setTime,
      timerType, setTimerType
    }}>
      <div className="App">
        <h1 className="title">Pomodoro Clock</h1>
        <Break />
        <Session />
        <Timer />
      </div>
    </ Context.Provider>
  );
}

export default App;
