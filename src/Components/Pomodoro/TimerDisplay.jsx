function TimerDisplay({ timeLeft, sessionType }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-circle">
      <div>
        <h1>
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </h1>
        <p>{sessionType === "focus" ? "Focus Time" : "Break Time"}</p>
      </div>
    </div>
  );
}

export default TimerDisplay;