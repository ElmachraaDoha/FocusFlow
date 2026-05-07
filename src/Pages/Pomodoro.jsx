import { useEffect, useState } from "react";
import "./Pomodoro.css";

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="pomodoro-page">
      <div className="pomodoro-card">
        <h2>Focus Session</h2>

        <div className="timer-circle">
          <div>
            <h1>
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </h1>
            <p>25 min</p>
          </div>
        </div>

        <select className="subject-select">
          <option>CPSC 310</option>
          <option>MATH 240</option>
          <option>CPSC 386</option>
        </select>

        <div className="timer-buttons">
          <button className="start-btn" onClick={startTimer}>
            Start
          </button>

          <button className="pause-btn" onClick={pauseTimer}>
            Pause
          </button>

          <button className="reset-btn" onClick={resetTimer}>
            Reset
          </button>
        </div>

        <p className="session-info">Pomodoro 1 of 4</p>
      </div>
    </div>
  );
}

export default Pomodoro;