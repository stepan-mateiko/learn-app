import RoutePaths from "../../constants/routes";
import { useDispatch } from "react-redux";

import { RegistrationSuccess } from "../Icon/Icon";
import Button from "../Button/Button";

import { logoutUser } from "../../store/users/actions";
import { CHANGE_PASSWORD_SUCCESS } from "../../constants/text-constants";

const ChangePasswordSuccess: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="change-password__success">
      <h2>{CHANGE_PASSWORD_SUCCESS.heading}</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>{CHANGE_PASSWORD_SUCCESS.text}</p>

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
