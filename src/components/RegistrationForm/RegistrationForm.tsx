import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { RootState } from "../../store";
import { registerUserAsync } from "../../store/users/thunk";
import { RegisterType } from "../../store/users/types";
import { SpecializationsType } from "../../store/specializations/types";
import { generatePassword, handleInputChange } from "../../helpers/helpers";
import { fetchAllSpecializations } from "../../store/specializations/thunk";

interface RegistrationFormProps {
  role: string;
}
const RegistrationForm: React.FC<RegistrationFormProps> = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const specializationOptions = useSelector<RootState, SpecializationsType[]>(
    (state) => state.specializations
  ).map((item: SpecializationsType) => item.specialization);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>("HTML/CSS");

  useEffect(() => {
    dispatch(fetchAllSpecializations() as any);
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: RegisterType = {
      userName: `${firstName}-${lastName}`.toLowerCase(),
      password: generatePassword(8),
      firstName,
      lastName,
      email,
      role,
      dob,
      address,
      specialization,
    };
    dispatch(registerUserAsync(newUser) as any);
    localStorage.setItem("user", JSON.stringify(newUser)); //delete later
    navigate(RoutePaths.REGISTRATION_VERIFICATION);
  };
  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <Input
        type="text"
        label="First name"
        value={firstName}
        onChange={handleInputChange(setFirstName)}
      />
      <Input
        type="text"
        label="Last name"
        value={lastName}
        onChange={handleInputChange(setLastName)}
      />
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={handleInputChange(setEmail)}
      />

      {role === "trainer" && (
        <Input
          type="select"
          label="specialization"
          value={specialization}
          onChange={handleInputChange(setSpecialization)}
          options={specializationOptions}
        />
      )}
      {role === "student" && (
        <Input
          type="date"
          label="Date of birth (Optional)"
          value={dob}
          onChange={handleInputChange(setDob)}
        />
      )}
      {role === "student" && (
        <Input
          type="text"
          label="Address (Optional)"
          value={address}
          onChange={handleInputChange(setAddress)}
        />
      )}
      <Button buttonText="Submit" isSubmit={true} />
    </form>
  );
};

export default RegistrationForm;
