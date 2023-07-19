import React from "react";
import "./ServeSection.css";

function ServeSection() {
  return (
    <div>
      <div className="serve-section">
        <div className="serve-section-desc">We Serve Happiness :)</div>
      </div>

      <div className="img-div">
        <div
          style={{
            width: "50%",
            height: "3px",
            background: "#e68541",
            marginBottom: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ServeSection;
