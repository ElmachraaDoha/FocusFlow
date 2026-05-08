function TimerControls({
    startTimer,
    pauseTimer,
    resetTimer
}) {

    return (
        <div className="timer-buttons">

            <button
                className="start-btn"
                onClick={startTimer}
            >
                Start
            </button>

            <button
                className="pause-btn"
                onClick={pauseTimer}
            >
                Pause
            </button>

            <button
                className="reset-btn"
                onClick={resetTimer}
            >
                Reset
            </button>

        </div>
    );
}

export default TimerControls;