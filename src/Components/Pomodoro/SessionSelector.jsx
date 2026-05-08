function SessionSelector({ setTimeLeft, sessionType, setSessionType }) {
  return (
    <select
      className="subject-select"
      value={sessionType}
      onChange={(e) => {
        const val = e.target.value;
        setSessionType(val);
        if (val === "focus") {
          setTimeLeft(25 * 60);
        } else if (val === "break") {
          setTimeLeft(5 * 60);
        }
      }}
    >
      <option value="focus">Focus Session</option>
      <option value="break">Break Session</option>
    </select>
  );
}

export default SessionSelector;