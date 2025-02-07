import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";
import { RegistrationFormProps } from "../../constants/props";
import {
  formatDate,
  generatePassword,
  handleInputChange,
} from "../../helpers/helpers";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { RootState } from "../../store";
import { registerUserAsync } from "../../store/users/thunk";
import { RegisterType } from "../../store/users/types";
import { SpecializationsType } from "../../store/specializations/types";

import { fetchAllSpecializations } from "../../store/specializations/thunk";

const RegistrationForm: React.FC<RegistrationFormProps> = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const specializationOptions = useSelector<RootState, SpecializationsType[]>(
    (state) => state.specializations
  ).map((item: SpecializationsType) => item.specialization);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>(formatDate());
  const [address, setAddress] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>("HTML/CSS");

  useEffect(() => {
    dispatch(fetchAllSpecializations() as any);
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { v4: uuidv4 } = require("uuid");
    event.preventDefault();
    const newUser: RegisterType = {
      ID: uuidv4(),
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
    navigate(RoutePaths.REGISTRATION_VERIFICATION);
  };
  return (
    <form
      action="#"
      method="POST"
      onSubmit={handleSubmit}
      className="registration__form"
    >
      <Input
        type="text"
        label="First name"
        value={firstName}
        onChange={handleInputChange(setFirstName)}
        placeholder="Input text"
        isRequired={true}
        pattern="[A-Z][a-zA-Z]*"
        title="Please enter a single word starting with a capital letter"
      />
      <Input
        type="text"
        label="Last name"
        value={lastName}
        onChange={handleInputChange(setLastName)}
        placeholder="Input text"
        isRequired={true}
        pattern="[A-Z][a-zA-Z]*"
        title="Please enter a single word starting with a capital letter"
      />
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={handleInputChange(setEmail)}
        placeholder="Input text"
        isRequired={true}
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
          name="dob"
        />
      )}
      {role === "student" && (
        <Input
          type="text"
          label="Address (Optional)"
          value={address}
          onChange={handleInputChange(setAddress)}
          placeholder="Input text"
        />
      )}
      <Button buttonText="Submit" isSubmit={true} classOfBtn="registration__" />
    </form>
  );
};

export default RegistrationForm;
