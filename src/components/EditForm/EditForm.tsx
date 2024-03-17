import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import { UserType } from "../../store/users/types";
import { AntSwitch } from "../Switch/Switch";

const EditForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () => toast.success("Account info changed");

  const specializationOptions = useSelector<RootState, SpecializationsType[]>(
    (state) => state.specializations
  ).map((item: SpecializationsType) => item.specialization);

  const user = useSelector((state: RootState) => state.user);
  const { role } = user;
  const trainers = useSelector((state: RootState) => state.trainers);
  const students = useSelector((state: RootState) => state.students);
  const token = localStorage.getItem("token") || "";

  const myData =
    role === "student"
      ? students.filter((item: StudentsType) => item.ID === user.ID)[0]
      : trainers.filter((item: TrainersType) => item.ID === user.ID)[0];

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
    dispatch(fetchAllTrainers(token) as any);
    dispatch(fetchAllStudents(token) as any);
  }, [dispatch]);

  const handleCheckboxChange = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser: UserType = {
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
    dispatch(updateUserAsync(user.ID, updatedUser, token) as any);
    notify();
    setTimeout(() => navigate(RoutePaths.MY_ACCOUNT), 2000);
  };
  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className="edit__form"
    >
      <Input
        type="text"
        label="First name"
        value={firstName}
        onChange={handleInputChange(setFirstName)}
        isRequired={true}
        pattern="[A-Z][a-zA-Z]*"
        title="Please enter a single word starting with a capital letter"
      />
      <Input
        type="text"
        label="Last name"
        value={lastName}
        onChange={handleInputChange(setLastName)}
        isRequired={true}
        pattern="[A-Z][a-zA-Z]*"
        title="Please enter a single word starting with a capital letter"
      />
      <Input
        type="text"
        label="User name"
        value={userName}
        onChange={handleInputChange(setUserName)}
        pattern="[a-z\-]+"
        title="Please enter only lowercase Latin letters and/or '-' symbol"
        isRequired={true}
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
        isRequired={true}
      />
      <label className="edit__form-check">
        Active <AntSwitch checked={isActive} onChange={handleCheckboxChange} />
      </label>

      {role === "trainer" && (
        <Input
          type="select"
          label="My specialization"
          value={specialization}
          onChange={handleInputChange(setSpecialization)}
          options={specializationOptions}
        />
      )}
      <div className="edit__form-btns">
        <Button
          buttonText="Cancel"
          isLink={true}
          path={RoutePaths.MY_ACCOUNT}
        />
        <Button buttonText="Save changes" isSubmit={true} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </form>
  );
};

export default EditForm;
