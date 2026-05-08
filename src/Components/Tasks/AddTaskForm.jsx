function AddTaskForm({
  newTask,
  setNewTask,
  addTask
}) {

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}
    >

      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) =>
          setNewTask({
            ...newTask,
            title: e.target.value
          })
        }
        className="subject-select"
      />

      <textarea
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({
            ...newTask,
            description: e.target.value
          })
        }
        className="subject-select"
      />

      <select
        value={newTask.priority}
        onChange={(e) =>
          setNewTask({
            ...newTask,
            priority: e.target.value
          })
        }
        className="subject-select"
      >

        <option value="high">
          High
        </option>

        <option value="medium">
          Medium
        </option>

        <option value="low">
          Low
        </option>

      </select>

      <button
        className="add-task-btn"
        onClick={addTask}
      >
        Save Task
      </button>

    </div>
  );
}

export default AddTaskForm;