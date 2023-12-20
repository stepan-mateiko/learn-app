import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RoutePaths from "../../constants/routes";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import studentImg from "../../assets/images/student-profile-img.png";

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users") || "null");
  const { role } = user;
  const [userFirstName, setUserFirstName] = useState<string>(user.firstName);
  const [userLastName, setUserLastName] = useState<string>(user.lastName);
  const [userEmail, setUserEmail] = useState<string>(user.email);
  const [userDOB, setUserDOB] = useState<string>(user.dob);
  const [userAddress, setUserAddress] = useState<string>(user.address);
  const [userUserName, setUserUserName] = useState<string>(user.userName);
  const [userIsActive, setUserIsActive] = useState<boolean>(user.isActive);
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

  const handlePostRequest = () => {
    let updatedUser = {
      ...user,
      userName: userUserName,
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      dob: userDOB,
      address: userAddress,
      isActive: userIsActive,
      specialization: role === "trainer" ? trainerSpecialization : "student",
    };
    localStorage.setItem("users", JSON.stringify(updatedUser));
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
