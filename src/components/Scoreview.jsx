import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  return (
    <div>
      <p>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default Scoreview;