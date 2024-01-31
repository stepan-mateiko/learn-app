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
import { generatePassword } from "../../helpers/helpers";
import { fetchAllSpecializations } from "../../store/specializations/thunk";

interface RegistrationFormProps {
  role: string;
}
const RegistrationForm: React.FC<RegistrationFormProps> = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const specializationOptions = useSelector<RootState, SpecializationsType[]>(
    (state) => state.specializations
  );

  const [userFirstName, setUserFirstName] = useState<string>("");
  const [userLastName, setUserLastName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDOB, setUserDOB] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [userSpecialization, setUserSpecialization] =
    useState<string>("HTML/CSS");

  useEffect(() => {
    dispatch(fetchAllSpecializations() as any);
  }, [dispatch]);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handlePostRequest = async () => {
    const userName = `${userFirstName}-${userLastName}`.toLowerCase();
    const password = generatePassword(8);
    let newUser: RegisterType = {
      userName,
      password,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      role,
    };
    if (role === "student") {
      newUser.dob = userDOB;
      newUser.address = userAddress;
    } else if (role === "trainer") {
      newUser.specialization = specializationOptions.filter(
        (item) => item.specialization === userSpecialization
      )[0].specialization;
    }
    dispatch(registerUserAsync(newUser) as any);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
    navigate(RoutePaths.REGISTRATION_VERIFICATION);
  };
  return (
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
  );
};

export default RegistrationForm;
