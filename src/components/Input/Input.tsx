import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  pattern?: string;
  title?: string;
  options?: string[];
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  pattern,
  title,
  options,
}) => {
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    ) : type === "select" && options ? (
      <select value={value} onChange={handleChange} required>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : type === "date" ? (
      <input type={type} value={value} onChange={handleChange} />
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
