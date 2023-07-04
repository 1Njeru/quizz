import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  
  return (
    
    


    <div className='page'>
    <div className='score'>
      <p>You scored {score} out of 10</p>
      <button onClick={handleResetClick}>Reset</button>
</div>


<footer>
<li className='lin'>
<a href='https://www.history.com/this-day-in-history/chilean-miners-are-rescued-after-69-days-underground' target='_blank rel="noreferrer"'>
2023 .. Click on me.. 1Njeru
</a>
</li>
</footer>

</div>


   
      
  );
};

export default Scoreview;
