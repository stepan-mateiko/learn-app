import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RoutePaths from "../../constants/routes";
import Button from "../Button/Button";
import Input from "../Input/Input";
import registrationTrainerImg from "../../assets/images/registration-trainer.png";
import registrationStudentImg from "../../assets/images/registration-student.png";

interface RegistrationFormProps {
  role: string | undefined;
}
const RegistrationForm: React.FC<RegistrationFormProps> = ({ role }) => {
  const [userFirstName, setUserFirstName] = useState<string>("");
  const [userLastName, setUserLastName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDOB, setUserDOB] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [userSpecialization, setUserSpecialization] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handlePostRequest = () => {
    const { v4: uuidv4 } = require("uuid");
    const userName = `${userFirstName}-${userLastName}`.toLowerCase();
    const generateRandomPassword = (length: number): string => {
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return Array.from(
        { length },
        () => charset[Math.floor(Math.random() * charset.length)]
      ).join("");
    };
    let newUser = {
      id: uuidv4(),
      userName: userName,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      dob: userDOB,
      address: userAddress,
      role: role,
      isActive: true,
      specialization: role === "trainer" ? userSpecialization : "student",
      userPassword: generateRandomPassword(5),
    };
    localStorage.setItem("users", JSON.stringify(newUser));
    console.log(newUser);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
    navigate(RoutePaths.REGISTRATION_VERIFICATION);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Registration</h2>
        <p>{role}</p>
        <div>
          <img
            src={
              role === "student"
                ? registrationStudentImg
                : registrationTrainerImg
            }
            alt={`registration as ${role}`}
          />
        </div>
      </div>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="First name"
          value={userFirstName}
          onChange={handleInputChange(setUserFirstName)}
        />
        <Input
          type="text"
          label="Last name"
          value={userLastName}
          onChange={handleInputChange(setUserLastName)}
        />
        <Input
          type="email"
          label="Email"
          value={userEmail}
          onChange={handleInputChange(setUserEmail)}
        />

        {role === "trainer" && (
          <Input
            type="select"
            label="specialization"
            value={userSpecialization}
            onChange={handleInputChange(setUserSpecialization)}
            options={["Front-end", "UI/UX Design", "QA"]}
          />
        )}
        {role === "student" && (
          <Input
            type="date"
            label="Date of birth (Optional)"
            value={userDOB}
            onChange={handleInputChange(setUserDOB)}
          />
        )}
        {role === "student" && (
          <Input
            type="text"
            label="Address (Optional)"
            value={userAddress}
            onChange={handleInputChange(setUserAddress)}
          />
        )}
        <Button buttonText="Submit" isSubmit={true} />
      </form>
    </div>
  );
};

export default RegistrationForm;
