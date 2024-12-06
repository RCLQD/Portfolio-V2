import React from "react";
import './Indicator.css';

const Indicator = () => {
  return (
    <svg className="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" fill="#10B981" fillOpacity="0.5" className="animate-blink-grow" />
      <circle cx="10" cy="10" r="4" fill="#10B981" />
    </svg>
  );
};

export default Indicator;
