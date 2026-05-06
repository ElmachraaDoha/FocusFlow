export default function About() {
  return (
    <div  className="container" style={styles.container}>
      
      <h1 style={styles.title}>About FocusFlow</h1>

      <div style={styles.box}>
        <p>
          FocusFlow is a productivity and study management application designed
          to help students stay organized, focused, and consistent.
        </p>

        <p>
          It combines task management, Pomodoro technique, and analytics to
          improve learning habits and track progress over time.
        </p>

        <p>
          The goal is simple: help you study smarter, not harder.
        </p>
      </div>

      <div style={styles.highlight}>
        <h2>Our Mission</h2>
        <p>
          Make studying easier by giving students tools to manage time and focus better.
        </p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "30px",
    color: "rgba(19, 42, 19, 1)"
  },

  box: {
    lineHeight: "1.8",
    fontSize: "16px",
    color: "rgba(49, 87, 44, 1)",
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    border: "1px solid rgba(79, 119, 45, 0.2)",
  },

  highlight: {
    marginTop: "30px",
    padding: "25px",
    borderRadius: "14px",
    background: "rgba(144, 169, 85, 0.15)",
    border: "1px solid rgba(79, 119, 45, 0.3)"
  }
};

