import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      
      <div style={styles.logo}>
        🌿 FocusFlow
      </div>

      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/features">Features</Link>
        <Link style={styles.link} to="/about">About</Link>
      </nav>

      <div style={styles.actions}>
        <Link to="/login" style={styles.login}>
          Login
        </Link>
      </div>

    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    backgroundColor: "rgba(144, 169, 85, 1)",
    color: "rgba(236, 243, 158, 1)",
  },

  logo: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    gap: "16px",
    fontSize: "14px",
  },

  link: {
    textDecoration: "none",
    color: "rgba(236, 243, 158, 1)",
  },

  login: {
    padding: "5px 10px",
    borderRadius: "6px",
    backgroundColor: "rgba(236, 243, 158, 1)",
    color: "black",
    textDecoration: "none",
    fontSize: "14px",
  }
};