import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import "../css/incase.css"; // Import your CSS file

const Incase = ({ children, className, onClick, disabled }) => {
  const handleClick = () => {
    // Custom logic for button click
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`custom-button ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Prop type validation
Incase.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Incase;
