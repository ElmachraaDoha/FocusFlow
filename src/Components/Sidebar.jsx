import react from 'react';
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <>
      <sidebar>
        <ul>
            <li><Link to="/app/dashboard">Dashboard</Link></li>
            <li><Link to="/app/tasks">Tasks</Link></li>
            <li><Link to="/app/pomodoro">Pomodoro</Link></li>
            <li><Link to="/app/analytics">Analytics</Link></li>
        </ul>
      </sidebar>

    </>
  );
  
}

export default Sidebar;