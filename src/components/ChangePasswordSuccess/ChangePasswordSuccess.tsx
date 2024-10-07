import RoutePaths from "../../constants/routes";
import { useDispatch } from "react-redux";

import { RegistrationSuccess } from "../Icon/Icon";
import Button from "../Button/Button";

import { logoutUser } from "../../store/users/actions";

const ChangePasswordSuccess: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="change-password__success">
      <h2>Password changed</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>Please proceed sign in with new password</p>

      <Button
        buttonText="Sign In"
        isLink={true}
        path={RoutePaths.LOGIN}
        onClick={() => {
          dispatch(logoutUser() as any);
        }}
      />
    </div>
  );
};

export default ChangePasswordSuccess;
