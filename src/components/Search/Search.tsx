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

    const filteredData = data
      .filter((item: any) => item.includes(trainer))
      .filter((item: any) => item.includes(name));

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
    <div>
      <h3>Search Trainings</h3>
      {role === "student" && (
        <form onSubmit={handleTrainersSubmit}>
          <Input
            type="text"
            label="Trainer name"
            onChange={handleInputChange(setTrainer)}
            value={trainer}
          />
          <Input
            type="text"
            label="Name"
            onChange={handleInputChange(setName)}
            value={name}
          />
          <Button buttonText="Search" isSubmit={true} />
        </form>
      )}
      {role === "trainer" && (
        <form onSubmit={handleStudentsSubmit}>
          <Input
            type="text"
            label="Student name"
            onChange={handleInputChange(setStudent)}
            value={student}
          />
          <Button buttonText="Search" isSubmit={true} />
        </form>
      )}
    </div>
  );
};

export default Search;
