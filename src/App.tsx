import React, { useEffect, useState } from 'react';
import chronoMini from './assets/CHRONOMINI.png';
import './App.css';
import ChronoButton from './composants/ChronoButton';


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
      <header className="App-header">
        <h1>
          BIENVENUE SUR NOTRE APPLICATION CHRONO
        </h1>
      </header>
      <div className='app-div'>
        <img src={chronoMini} className="" alt="logo" width="100%" />
        <div className='app-button' >
          <ChronoButton name='Play' onClick={handlePlayClick} />
          <ChronoButton name='Pause' onClick={handlePauseClick} />
          <ChronoButton name='Reset' onClick={handleResetClick} />
        </div>

      </div>
      <div>
        <p>Chronomètre : {seconds} secondes</p>
      </div>
    </div>
  );
}

export default App;
