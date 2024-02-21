import { useState } from "react";

import { handleInputChange } from "../../helpers/helpers";

import Input from "../Input/Input";
import Button from "../Button/Button";

interface SearchProps {
  role: string;
  data: string[][];
  update: (data: string[][]) => void;
}

const Search: React.FC<SearchProps> = ({ role, data, update }) => {
  const [trainer, setTrainer] = useState("");
  const [name, setName] = useState("");
  const [student, setStudent] = useState("");

  const handleTrainersSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let filteredData: string[][] = [];

    if (trainer && name) {
      filteredData = data
        .filter((item: any) => item.includes(trainer))
        .filter((item: any) => item.includes(name));
    } else if (trainer && !name) {
      filteredData = data.filter((item: any) => item.includes(trainer));
    } else if (!trainer && name) {
      filteredData = data.filter((item: any) => item.includes(name));
    }

    update(filteredData);
    setTrainer("");
    setName("");
  };

  const handleStudentsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredData = data.filter((item: any) => item.includes(student));

    update(filteredData);
    setStudent("");
  };

  return (
    <>
      {role === "student" && (
        <form className="search" onSubmit={handleTrainersSubmit}>
          <div className="search__inputs">
            <Input
              type="text"
              label="Trainer name"
              placeholder="Enter trainer full name"
              onChange={handleInputChange(setTrainer)}
              value={trainer}
              pattern="^[A-Z][a-z]+\s[A-Z][a-z]+$"
              title="Please enter two words starting with a capital letter"
            />
            <Input
              type="text"
              label="Training name"
              placeholder="Enter training name"
              onChange={handleInputChange(setName)}
              value={name}
              pattern="[A-Z][a-zA-Z]*"
              title="Please enter a single word starting with a capital letter"
            />
          </div>

          <Button buttonText="Search" isSubmit={true} />
        </form>
      )}
      {role === "trainer" && (
        <form className="search" onSubmit={handleStudentsSubmit}>
          <Input
            type="text"
            label="Student name"
            placeholder="Enter student full name"
            onChange={handleInputChange(setStudent)}
            value={student}
            pattern="^[A-Z][a-z]+\s[A-Z][a-z]+$"
            title="Please enter two words starting with a capital letter"
          />
          <Button buttonText="Search" isSubmit={true} />
        </form>
      )}
    </>
  );
};

export default Search;
