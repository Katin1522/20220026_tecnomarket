import React from 'react';
import './Button.css'; 

const Button = ({ type, onClick, text, color = 'green' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${color}`} 
    >
      {text}
    </button>
  );
};

export default Button;
