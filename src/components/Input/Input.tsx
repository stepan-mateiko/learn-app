import React, { ChangeEvent } from "react";
import { formatDate } from "../../helpers/helpers";

import { InputProps } from "../../constants/props";

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  pattern,
  title,
  options,
  checked,
  isRequired,
  name,
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
        value={value as string}
        onChange={handleChange}
        placeholder={placeholder}
      />
    ) : type === "select" && options ? (
      <select value={value as string} onChange={handleChange} required>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : type === "date" && name === "dob" ? (
      <input
        type={type}
        value={value as string}
        onChange={handleChange}
        max={formatDate()}
      />
    ) : type === "checkbox" ? (
      <input
        type={type}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    ) : (
      <input
        type={type}
        value={value as string}
        onChange={handleChange}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        required={isRequired}
        min="1"
      />
    );

  return (
    <div className="input-block">
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
