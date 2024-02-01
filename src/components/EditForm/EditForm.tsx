import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";

import { handleInputChange } from "../../helpers/helpers";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { RootState } from "../../store";
import { SpecializationsType } from "../../store/specializations/types";
import { fetchAllSpecializations } from "../../store/specializations/thunk";
import { fetchAllTrainers } from "../../store/trainers/thunk";
import { fetchAllStudents } from "../../store/students/thunk";
import { updateUserAsync } from "../../store/users/thunk";
import { StudentsType } from "../../store/students/types";
import { TrainersType } from "../../store/trainers/types";

const EditForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const specializationOptions = useSelector<RootState, SpecializationsType[]>(
    (state) => state.specializations
  ).map((item: SpecializationsType) => item.specialization);

  const user = useSelector((state: RootState) => state.user);
  const { role } = user;
  const trainers = useSelector((state: RootState) => state.trainers);
  const students = useSelector((state: RootState) => state.students);

  const myData =
    role === "student"
      ? students.filter((item: StudentsType) => item.id === user.id)[0]
      : trainers.filter((item: TrainersType) => item.id === user.id)[0];

  const [firstName, setFirstName] = useState<string>(myData.firstName);
  const [lastName, setLastName] = useState<string>(myData.lastName);
  const [email, setEmail] = useState<string>(myData.email);
  const [dob, setDob] = useState<string>(myData.dob);
  const [address, setAddress] = useState<string>(myData.address);
  const [userName, setUserName] = useState<string>(myData.userName);
  const [isActive, setIsActive] = useState<boolean>(myData.isActive);
  const [specialization, setSpecialization] = useState<string>(
    myData.specialization
  );

  useEffect(() => {
    dispatch(fetchAllSpecializations() as any);
    dispatch(fetchAllTrainers() as any);
    dispatch(fetchAllStudents() as any);
  }, [dispatch]);

  const handleCheckboxChange = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handlePostRequest = async () => {
    let updatedUser = {
      ...user,
      userName,
      firstName,
      lastName,
      email,
      isActive,
      specialization,
      dob,
      address,
    };
    dispatch(updateUserAsync(user.id, updatedUser) as any);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
    navigate(RoutePaths.MY_ACCOUNT);
  };
  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
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
        type="text"
        label="User name"
        value={userName}
        onChange={handleInputChange(setUserName)}
      />
      {role === "student" && (
        <Input
          type="date"
          label="Date of birth"
          value={dob}
          onChange={handleInputChange(setDob)}
        />
      )}
      {role === "student" && (
        <Input
          type="text"
          label="Address"
          value={address}
          onChange={handleInputChange(setAddress)}
        />
      )}
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={handleInputChange(setEmail)}
      />
      <Input
        type="checkbox"
        label="Active"
        checked={isActive}
        value={isActive}
        onChange={handleCheckboxChange}
      />
      {role === "trainer" && (
        <Input
          type="select"
          label="My specialization"
          value={specialization}
          onChange={handleInputChange(setSpecialization)}
          options={specializationOptions}
        />
      )}
      <div>
        <Button
          buttonText="Cancel"
          isLink={true}
          path={RoutePaths.MY_ACCOUNT}
        />
        <Button buttonText="Save changes" isSubmit={true} />
      </div>
    </form>
  );
};

export default EditForm;
