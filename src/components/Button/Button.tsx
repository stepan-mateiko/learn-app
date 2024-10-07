import React from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "../../constants/props";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  isLink,
  path,
  isSubmit,
  classOfBtn,
}) => {
  return (
    <button
      className={`${classOfBtn}btn`}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {isLink ? <Link to={`${path}`}>{buttonText}</Link> : buttonText}
    </button>
  );
};

export default Button;
