import React from "react";

function Spinner() {
  return (
    <>
      <div
        class="spinner-grow"
        style="width: 3rem; height: 3rem;"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );
}

export default Spinner;
