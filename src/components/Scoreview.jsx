import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  return (
    <div className='text-2xl'>
      <p>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
<div className='font-bold'>
   <footer className="bg-gray-900 text-white font-bold">
     <div className="md:flex md:justify-between md:items-center sm:px-12 bg-[#ffffff19] ">
       <span>Congratulations</span>
        <span> @Njeru </span> </div>
    </footer>
</div>
    </div>
   
      
  );
};

export default Scoreview;
