import { useState } from "react";
import "./Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish OS assignment",
      subject: "CPSC 310",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Watch React tutorial",
      subject: "CPSC 386",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Lab report",
      subject: "CPSC 310",
      priority: "High",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (<div className="tasks-page">
      <div className="tasks-container">
        <div className="tasks-header">
          <h2>Tasks</h2>

          <button className="add-task-btn">+ Add Task</button>
        </div>

        <div className="filters">
          <select>
            <option>All Subjects</option>
          </select>

          <select>
            <option>All Status</option>
          </select>
        </div>

        <div className="tasks-list">
          {tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <div className="task-left">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <div>
                  <h4
                    className={task.completed ? "completed" : ""}
                  >
                    {task.title}
                  </h4>

                  <p>{task.subject}</p>
                </div>
              </div>

              <span
                className={`priority ${task.priority.toLowerCase()}`}
              >
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;