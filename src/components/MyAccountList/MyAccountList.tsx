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
  photo: string;
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
    photo,
  } = user;

  return (
    <div className="list">
      <h3>My Profile</h3>
      <div className="list__header">
        <img src={photo ? photo : studentImg} alt="profile" />
        <h5>Status</h5>
        <p className={`list__status-${isActive ? "active" : "notActive"}`}>
          {isActive ? "Active" : "Not active"}
        </p>
      </div>
      <h5>First name</h5>
      <p>{firstName}</p>
      <h5>Last name</h5>
      <p>{lastName}</p>
      <h5>User name</h5>
      <p> {userName}</p>
      <h5>{role === "student" ? "Date of Birth" : "Specialization"}</h5>
      <p>{role === "student" ? dob : specialization}</p>
      {role === "student" && <h5>Address</h5>}
      {role === "student" && <p>{address}</p>}
      <h5>Email</h5>
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
