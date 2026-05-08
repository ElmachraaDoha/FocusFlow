function TaskItem({
  task,
  toggleTask,
  deleteTask
}) {

  return (
    <div className="task-item">

      <div className="task-left">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            toggleTask(task.id)
          }
        />

        <div>

          <h4
            className={
              task.completed
                ? "completed"
                : ""
            }
          >
            {task.title}
          </h4>

          <p>{task.description}</p>

        </div>

      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center"
        }}
      >

        <span
          className={`priority ${task.priority}`}
        >
          {task.priority}
        </span>

        <button
          onClick={() =>
            deleteTask(task.id)
          }
          style={{
            border: "none",
            background: "#fee2e2",
            color: "#dc2626",
            padding: "8px 10px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;