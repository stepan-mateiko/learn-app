import { RegistrationSuccess } from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

const ChangePasswordSuccess: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Password changed</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>Please proceed sign in with new password</p>

      <Button buttonText="Sign In" isLink={true} path="login" />
    </div>
  );
};

export default ChangePasswordSuccess;
