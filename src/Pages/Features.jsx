export default function Features() {
  return (
    <div  className="container"style={styles.container}>
      
      <h1 style={styles.title}>Features</h1>

      <p style={styles.subtitle}>
        Everything you need to stay focused and productive.
      </p>

      <div style={styles.grid}>
        
        <div style={styles.card}>
          <h2>📊 Dashboard</h2>
          <p>Get a clear overview of your study progress and activity.</p>
        </div>

        <div style={styles.card}>
          <h2>📝 Tasks</h2>
          <p>Create, organize, and track your daily study tasks easily.</p>
        </div>

        <div style={styles.card}>
          <h2>⏱ Pomodoro</h2>
          <p>Stay focused using timed study sessions and breaks.</p>
        </div>

        <div style={styles.card}>
          <h2>📈 Analytics</h2>
          <p>Track your productivity with detailed progress insights.</p>
        </div>

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
    marginBottom: "10px",
    color: "rgba(19, 42, 19, 1)"
  },

  subtitle: {
    color: "rgba(49, 87, 44, 1)",
    marginBottom: "40px",
    fontSize: "16px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px"
  },

  card: {
    padding: "20px",
    borderRadius: "14px",
    background: "white",
    border: "1px solid rgba(79, 119, 45, 0.2)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  }
};