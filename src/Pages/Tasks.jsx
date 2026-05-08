import { useState } from "react";

import "./Tasks.css";

import AddTaskForm from "../Components/Tasks/AddTaskForm";
import TaskList from "../Components/Tasks/TaskList";

function Tasks() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React UI",
      description: "Finish dashboard design",
      completed: false,
      priority: "high"
    }
  ]);

  const [filter, setFilter] = useState("all");

  const [showForm, setShowForm] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "low"
  });

  const addTask = () => {

    if (
      newTask.title.trim() === "" ||
      newTask.description.trim() === ""
    ) {
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      completed: false
    };

    setTasks([...tasks, task]);

    setNewTask({
      title: "",
      description: "",
      priority: "low"
    });

    setShowForm(false);
  };

  const toggleTask = (id) => {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );

  };

  const deleteTask = (id) => {

    setTasks(
      tasks.filter((task) => task.id !== id)
    );

  };

  const filteredTasks = tasks.filter((task) => {

    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="tasks-page">

      <div className="tasks-container">

        <div className="tasks-header">

          <h2>My Tasks</h2>

          <button
            className="add-task-btn"
            onClick={() =>
              setShowForm(!showForm)
            }
          >
            + Add Task
          </button>

        </div>

        {showForm && (

          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />

        )}

        <div className="filters">

          <select
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >

            <option value="all">
              All Tasks
            </option>

            <option value="completed">
              Completed
            </option>

            <option value="pending">
              Pending
            </option>

          </select>

        </div>

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      </div>

    </div>
  );
}

export default Tasks;