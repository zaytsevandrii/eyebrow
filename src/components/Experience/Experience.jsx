import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
 

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">8+</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">100+</div>
        <span >happy </span>
        <span>clients</span>
      </div>
      
    </div>
  );
};

export default Experience;
