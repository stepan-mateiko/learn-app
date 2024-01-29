import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import RoutePaths from "../../constants/routes";
import Button from "../Button/Button";
import Input from "../Input/Input";
import registrationTrainerImg from "../../assets/images/registration-trainer.png";
import registrationStudentImg from "../../assets/images/registration-student.png";

interface RegistrationFormProps {
  role: string | undefined;
}
interface Specializations {
  id: string;
  specialization: string;
}
const RegistrationForm: React.FC<RegistrationFormProps> = ({ role }) => {
  const [userFirstName, setUserFirstName] = useState<string>("");
  const [userLastName, setUserLastName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDOB, setUserDOB] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [userSpecialization, setUserSpecialization] = useState<string>("");
  const navigate = useNavigate();
  const [specializationOptions, setSpecializationOptions] = useState<
    Specializations[]
  >([]);

  const getSpecializations = async () => {
    const res = await axios.get("http://localhost:3080/api/specializations");
    setSpecializationOptions(res.data.specializations);
    setUserSpecialization(res.data.specializations[0].specialization);
  };
  useEffect(() => {
    getSpecializations();
  }, []);
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handlePostRequest = async () => {
    const userName = `${userFirstName}-${userLastName}`.toLowerCase();
    console.log(userName);
    let newUser = {
      userName,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      dob: userDOB,
      address: userAddress,
      role: role,
      specialization:
        role === "trainer"
          ? specializationOptions.filter(
              (item) => item.specialization === userSpecialization
            )[0].specialization
          : "student",
    };
    await axios.post("http://localhost:3080/api/users", newUser);
    localStorage.setItem("user", newUser.userName);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
    setTimeout(() => {
      navigate(RoutePaths.REGISTRATION_VERIFICATION);
    }, 200);
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
            options={specializationOptions.map((item) => item.specialization)}
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
