import Button from "../Button/Button";
import studentImg from "../../assets/images/student-profile-img.png";

const MyAccountList: React.FC = () => {
  return (
    <div>
      <h3>My Profile</h3>
      <div style={{ display: "flex" }}>
        <img src={studentImg} alt="" />
        <h4>Status</h4>
        <p>Active</p>
      </div>
      <h4>First Name</h4>
      <p>name</p>
      <h4>Last name</h4>
      <p>name</p>
      <h4>User name</h4>
      <p> name</p>
      <h4>Date of birth</h4>
      <p>date</p>
      <h4>Address</h4>
      <p>address</p>
      <h4>Email</h4>
      <p>email</p>
      <div>
        <Button buttonText="Edit profile" />
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
