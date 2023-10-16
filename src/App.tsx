import React, { useEffect, useState } from 'react';
import play from './assets/play.png';
import './App.css';
import ChronoButton from './composants/ChronoButton';

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(remainingSeconds).padStart(2, '0')}`;
  return formattedTime;
}


function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const handlePlayClick = () => {
    setIsRunning(true);
  };

  const handlePauseClick = () => {
    setIsRunning(false);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  let interval: number; // Déplacez la déclaration de la variable en dehors du useEffect

  useEffect(() => {
    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      window.clearInterval(interval);
    }

    return () => window.clearInterval(interval);
  }, [isRunning]);


  return (
    <div className="App">
      <div className="app-background">
        <h1>Time Master: Votre Chronomètre Personnalisé</h1>
        <div className="app-button">
          <ChronoButton name="Play" onClick={handlePlayClick} />
          <ChronoButton name="Pause" onClick={handlePauseClick} />
          <ChronoButton name="Reset" onClick={handleResetClick} />
        </div>
        <p className="chrono-result">{formatTime(seconds)}</p>
      </div>
    </div>

  );
}

export default App;
