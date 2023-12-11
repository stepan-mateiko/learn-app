import React, { ReactNode } from "react";

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  element?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick, element }) => {
  return (
    <button className="btn" onClick={onClick}>
      {!element ? buttonText.toUpperCase() : element}
    </button>
  );
};

export default Button;
