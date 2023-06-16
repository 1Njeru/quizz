import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  return (
    <div className='page'>
    <div className='score'>
      <p>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
</div>
 <footer className="close">
       <span>© 2023 Appy. All rights reserved.</span>
        <span >Terms · Privacy Policy</span> 
    </footer>
</div>
   
      
  );
};

export default Scoreview;
