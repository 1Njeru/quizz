import React from "react";
import "./Scoreview.css";

const Scoreview = ({ handleResetClick, score }) => {
  return (
    <div>
      <p>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
     <div className='text-xl font-lighter'>
      <footer className="bg-gray-900 text-white font-bold">
     <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
       <span>Congratulations on completing</span>
        <span> @Abraham </span> </div>
    </footer>
    </div>
  );
};

export default Scoreview;
