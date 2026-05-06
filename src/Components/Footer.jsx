export default function Footer() {
  return (
    <footer style={styles.footer}>
      
      <div style={styles.left}>
        <h3>🌿 FocusFlow</h3>
        <p>Study smarter, not harder.</p>
      </div>

      <div style={styles.center}>
        <p>© 2026 FocusFlow. All rights reserved.</p>
      </div>

      <div style={styles.right}>
        <a style={styles.link} href="#">Linkedin</a>
        <a style={styles.link} href="#">GitHub</a>
      </div>

    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(49, 87, 44, 1)",
    color: "rgba(236, 243, 158, 1)",
    fontSize: "14px",
  },

  link: {
    textDecoration: "none",
    color: "rgba(236, 243, 158, 1)",
  }
};