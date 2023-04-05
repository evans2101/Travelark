import React from "react";

function index() {
  return (
    <div>
      <p>Recommend</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
        <h1>Most Picked Destination</h1>
        <button
          style={{
            backgroundColor: "green",
            height: '35px',
            width: '100px',
            borderRadius: '10%'
          }}
        >
          See All
        </button>
      </div>
    </div>
  );
}

export default index;
