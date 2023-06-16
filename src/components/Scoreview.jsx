import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  return (
    <div className='score'>
      <p>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
  <footer className='close'>
       <span>Congratulations</span>
        <span> @Njeru </span> 
    </footer>
</div>
   
      
  );
};

export default Scoreview;
