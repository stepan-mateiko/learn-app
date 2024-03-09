import RoutePaths from "../../constants/routes";
import Button from "../Button/Button";
import studentImg from "../../assets/images/student-profile-img.png";

interface MyAccountListProps {
  ID: string;
  userName: string;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  email: string;
  specialization: string;
  isActive: boolean;
  role: string;
}

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
  } = user;

  return (
    <div className="list">
      <h3>My Profile</h3>
      <div className="list__header">
        <img src={studentImg} alt="profile" />
        <h4>Status</h4>
        <p className={`list__status-${isActive ? "active" : "notActive"}`}>
          {isActive ? "Active" : "Not active"}
        </p>
      </div>
      <h4>First name</h4>
      <p>{firstName}</p>
      <h4>Last name</h4>
      <p>{lastName}</p>
      <h4>User name</h4>
      <p> {userName}</p>
      <h4>{role === "student" ? "Date of Birth" : "Specialization"}</h4>
      <p>{role === "student" ? dob : specialization}</p>
      {role === "student" && <h4>Address</h4>}
      {role === "student" && <p>{address}</p>}
      <h4>Email</h4>
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
