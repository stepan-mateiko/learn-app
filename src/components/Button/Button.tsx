import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  isLink?: boolean;
  path?: string;
  isSubmit?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  isLink,
  path,
  isSubmit,
}) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {isLink ? <Link to={`${path}`}>{buttonText}</Link> : buttonText}
    </button>
  );
};

export default Button;
