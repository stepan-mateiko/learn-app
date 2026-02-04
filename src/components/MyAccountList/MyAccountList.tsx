import RoutePaths from "../../constants/routes";
import { MyAccountListProps } from "../../constants/props";

import Button from "../Button/Button";

import studentImg from "../../assets/images/student-profile-img.png";
import { MY_ACCOUNT_LIST } from "../../constants/text-constants";

const MyAccountList: React.FC<{ user: MyAccountListProps }> = ({ user }) => {
  const {
    firstName,
    lastName,
    dob,
    address,
    email,
    userName,
    isActive,
    specialization,
    role,
    photo,
  } = user;

  return (
    <div className="list">
      <h3>{MY_ACCOUNT_LIST.heading}</h3>
      <div className="list__header">
        <img src={photo ? photo : studentImg} alt="profile" />
        <h5>{MY_ACCOUNT_LIST.status}</h5>
        <p className={`list__status-${isActive ? "active" : "notActive"}`}>
          {isActive ? "Active" : "Not active"}
        </p>
      </div>
      <h5>{MY_ACCOUNT_LIST.firstName}</h5>
      <p>{firstName}</p>
      <h5>{MY_ACCOUNT_LIST.lastName}</h5>
      <p>{lastName}</p>
      <h5>{MY_ACCOUNT_LIST.userName}</h5>
      <p> {userName}</p>
      <h5>{role === "student" ? "Date of Birth" : "Specialization"}</h5>
      <p>{role === "student" ? dob : specialization}</p>
      {role === "student" && <h5>{MY_ACCOUNT_LIST.address}</h5>}
      {role === "student" && <p>{address}</p>}
      <h5>{MY_ACCOUNT_LIST.email}</h5>
      <p>{email}</p>
      <div className="list__footer">
        <Button
          buttonText="Edit profile"
          isLink={true}
          path={RoutePaths.EDIT_PROFILE}
        />
        <Button
          buttonText="Change password"
          isLink={true}
          path={RoutePaths.CHANGE_PASSWORD}
        />
      </div>
    </div>
  );
};

export default MyAccountList;
