import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  isLink?: boolean;
  path?: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  isLink,
  path,
}) => {
  return (
    <button className="btn" onClick={onClick}>
      {isLink ? <Link to={`/${path}`}>{buttonText}</Link> : buttonText}
    </button>
  );
};

export default Button;
