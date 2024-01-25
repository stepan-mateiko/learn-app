import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import RoutePaths from "../../constants/routes";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import studentImg from "../../assets/images/student-profile-img.png";
import { Student } from "../../helpers/mockedStudents";
import { Trainer } from "../../helpers/mockedTrainers";

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const { role } = user;
  const [myData, setMyData] = useState<Student | Trainer>(user);

  const getData = async () => {
    const trainersfromBack = (
      await axios.get("http://localhost:3080/api/trainers")
    ).data.trainers;
    const studentsfromBack = (
      await axios.get("http://localhost:3080/api/students")
    ).data.students;

    if (role === "student") {
      setMyData(
        studentsfromBack.filter((item: Student) => item.id === user.id)[0]
      );
    } else if (role === "trainer") {
      setMyData(
        trainersfromBack.filter((item: Trainer) => item.id === user.id)[0]
      );
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [userFirstName, setUserFirstName] = useState<string>(user.firstName);
  const [userLastName, setUserLastName] = useState<string>(myData.lastName);
  const [userEmail, setUserEmail] = useState<string>(user.email);
  const [userDOB, setUserDOB] = useState<string>(myData.dob);
  const [userAddress, setUserAddress] = useState<string>(myData.address);
  const [userUserName, setUserUserName] = useState<string>(user.userName);
  const [userIsActive, setUserIsActive] = useState<boolean>(myData.isActive);
  const [trainerSpecialization, setTrainerSpecialization] =
    useState<string>("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handleCheckboxChange = () => {
    if (userIsActive) {
      setUserIsActive(false);
    } else {
      setUserIsActive(true);
    }
  };

  const handlePostRequest = async () => {
    let updatedUser = {
      ...user,
      userName: userUserName,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
    };
    await axios.put(`http://localhost:3080/api/users/${user.id}`, updatedUser);

    let updatedExtra: Record<string, string | boolean> = {};
    if (role === "student") {
      updatedExtra.dob = userDOB;
      updatedExtra.address = userAddress;
      updatedExtra.isActive = userIsActive;
      await axios.put(
        `http://localhost:3080/api/students/${user.id}`,
        updatedExtra
      );
    } else {
      updatedExtra.specialization = trainerSpecialization;
      updatedExtra.isActive = userIsActive;
      await axios.put(
        `http://localhost:3080/api/trainers/${user.id}`,
        updatedExtra
      );
    }
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
    navigate(RoutePaths.MY_ACCOUNT);
  };

  return (
    <div>
      <h3>Edit Profile</h3>
      <div style={{ display: "flex" }}>
        <img src={studentImg} alt="" width={100} />
        <h4>Upload your photo</h4>
      </div>
      <form action="#" method="post" onSubmit={handleSubmit}>
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
          type="text"
          label="User name"
          value={userUserName}
          onChange={handleInputChange(setUserUserName)}
        />
        {role === "student" && (
          <Input
            type="date"
            label="Date of birth"
            value={userDOB}
            onChange={handleInputChange(setUserDOB)}
          />
        )}
        {role === "student" && (
          <Input
            type="text"
            label="Address"
            value={userAddress}
            onChange={handleInputChange(setUserAddress)}
          />
        )}
        <Input
          type="email"
          label="Email"
          value={userEmail}
          onChange={handleInputChange(setUserEmail)}
        />
        <Input
          type="checkbox"
          label="Active"
          checked={userIsActive}
          value={userIsActive}
          onChange={handleCheckboxChange}
        />
        {role === "trainer" && (
          <Input
            type="select"
            label="My specialization"
            value={trainerSpecialization}
            onChange={handleInputChange(setTrainerSpecialization)}
            options={["PHP", "JavaScript", "React", "Angular"]}
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
    </div>
  );
};

export default EditProfile;
