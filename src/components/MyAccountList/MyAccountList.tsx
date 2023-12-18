import Button from "../Button/Button";
import studentImg from "../../assets/images/student-profile-img.png";

interface MyAccountListProps {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  email: string;
  role: string;
  specialization: string;
  isActive: boolean;
  userPassword: string;
}

const MyAccountList: React.FC<{ user: MyAccountListProps }> = ({ user }) => {
  const { firstName, lastName, dob, address, email, userName, isActive } = user;
  return (
    <div>
      <h3>My Profile</h3>
      <div style={{ display: "flex" }}>
        <img src={studentImg} alt="" width={100} />
        <h4>Status</h4>
        <p>{isActive ? "Active" : "Not active"}</p>
      </div>
      <h4>First name</h4>
      <p>{firstName}</p>
      <h4>Last name</h4>
      <p>{lastName}</p>
      <h4>User name</h4>
      <p> {userName}</p>
      <h4>Date of birth</h4>
      <p>{dob}</p>
      <h4>Address</h4>
      <p>{address}</p>
      <h4>Email</h4>
      <p>{email}</p>
      <div>
        <Button
          buttonText="Edit profile"
          isLink={true}
          path="my-account/edit"
        />
        <Button
          buttonText="Change password"
          isLink={true}
          path="change-password"
        />
      </div>
    </div>
  );
};

export default MyAccountList;
