import React from "react";

function Spinner() {
  const style = {
    width: '3m',
    height: '3m',
  }
  return (
    <>
      <div
        className="spinner-grow"
        style={style}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
}

export default Spinner;
