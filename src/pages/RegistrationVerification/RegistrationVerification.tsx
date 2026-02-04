import RoutePaths from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { loginUserAsync } from "../../store/users/thunk";

import { RegistrationSuccess } from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import { REGISTRATION_VERIFICATION } from "../../constants/text-constants";

const RegistrationVerification: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { userName, password } = user;
  return (
    <div className="registration__verification">
      <h2>{REGISTRATION_VERIFICATION.heading}</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>{REGISTRATION_VERIFICATION.text}</p>
      <h4>{REGISTRATION_VERIFICATION.userName}</h4>
      <p>{userName}</p>
      <h4>{REGISTRATION_VERIFICATION.password}</h4>
      <p>{password}</p>
      <Button
        buttonText="My account"
        isLink={true}
        path={RoutePaths.MY_ACCOUNT}
        classOfBtn="registration__verification-"
        onClick={() => {
          dispatch(loginUserAsync({ userName, password }) as any);
        }}
      />
    </div>
  );
};

export default RegistrationVerification;
