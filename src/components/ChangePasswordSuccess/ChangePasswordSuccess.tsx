import RoutePaths from "../../constants/routes";

import { RegistrationSuccess } from "../Icon/Icon";
import Button from "../Button/Button";

const ChangePasswordSuccess: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Password changed</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>Please proceed sign in with new password</p>

      <Button buttonText="Sign In" isLink={true} path={RoutePaths.LOGIN} />
    </div>
  );
};

export default ChangePasswordSuccess;
