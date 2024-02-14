import React, { ChangeEvent } from "react";

interface InputProps {
  type:
    | "text"
    | "textarea"
    | "select"
    | "date"
    | "checkbox"
    | "email"
    | "password"
    | "number";
  label: string;
  value?: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  placeholder?: string;
  pattern?: string;
  title?: string;
  options?: string[] | number[];
  checked?: boolean;
  isRequired?: boolean;
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
  checked,
  isRequired,
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
    ) : type === "date" ? (
      <input type={type} value={value as string} onChange={handleChange} />
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
