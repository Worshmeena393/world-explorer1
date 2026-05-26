export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 World Explorer</p>
    </footer>
  );
}

/* 🍏 APPLE STYLE FOOTER */
const styles = {
  footer: {
    textAlign: "center",
    padding: "25px 15px",
    marginTop: "60px",
    background: "rgba(15, 23, 42, 0.9)",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
  },

  text: {
    opacity: 0.6,
    fontSize: "14px",
  },
};