import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  pattern?: string;
  title?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  pattern,
  title,
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  const inputElement =
    type === "textarea" ? (
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        required
      />
    );

  return (
    <div className="input-block">
      <label>{label}</label>
      {inputElement}
      <div className="error-message" id="name-error"></div>
    </div>
  );
};

export default Input;
