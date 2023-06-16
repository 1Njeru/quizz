import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  return (
    <div className='score'>
      <p>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
</div>
  <footer className='close'>
       <span>Congratulations</span>
        <span> @Njeru </span> 
    </footer>
   
      
  );
};

export default Scoreview;
