import { useEffect, useState } from "react";
import "./Pomodoro.css";
import TimerDisplay from "../Components/Pomodoro/TimerDisplay";
import TimerControls from "../Components/Pomodoro/TimerControls";
import SessionSelector from "../Components/Pomodoro/SessionSelector";

function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState("focus");

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setSessionType("focus");
    setTimeLeft(25 * 60);
  };

  return (
    <div className="pomodoro-page">
      <div className="pomodoro-card">
        <h2>Pomodoro Timer</h2>

        <TimerDisplay timeLeft={timeLeft} sessionType={sessionType} />

        <SessionSelector 
          setTimeLeft={setTimeLeft} 
          sessionType={sessionType} 
          setSessionType={setSessionType} 
        />

        <TimerControls
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
        />

        <div className="session-info">
          {isRunning ? `${sessionType === "focus" ? "Focus" : "Break"} Session Running...` : "Paused"}
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;