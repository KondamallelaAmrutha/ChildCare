
import React from "react";

function AssessmentPopup({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "30px 20px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}>
        <h3 style={{ marginBottom: "15px" }}>Tattva</h3>
        <p >Call us for Assessment:</p>
        <p style={{ fontWeight: "bold" }}>+91 9555523248</p>
        <p style={{ fontWeight: "bold" }}>+91 8121211884</p>
        <button 
          onClick={onClose} 
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e3a8a",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default AssessmentPopup;
