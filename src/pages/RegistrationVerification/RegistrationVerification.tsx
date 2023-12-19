import { RegistrationSuccess } from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

interface User {
  userName: string;
  email: string;
  userPassword: string;
}
const RegistrationVerification: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "{}") as User;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Registration</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>
        Congratulations, you have successfully registered with Learn Platform!
        Here is your credentials that you can change in your account
      </p>
      <h4>User Name</h4>
      <p>{user.userName}</p>
      <h4>Password</h4>
      <p>{user.userPassword}</p>
      <Button buttonText="My account" isLink={true} path="my-account" />
    </div>
  );
};

export default RegistrationVerification;
