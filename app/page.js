export default function Home() {
  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "120px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "40px", color: "#333" }}>
        SMM PANEL
      </h1>

      <p style={{ fontSize: "18px", color: "#666" }}>
        Welcome to your system
      </p>

      <a 
        href="/login" 
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Login
      </a>

    </div>
  );
}
