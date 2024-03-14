import RoutePaths from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";

import { RegistrationSuccess } from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import { loginUserAsync } from "../../store/users/thunk";

const RegistrationVerification: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { userName, password } = user;
  return (
    <div className="registration__verification">
      <h2>Registration</h2>
      <div>
        <RegistrationSuccess />
      </div>
      <p>
        Congratulations, you have successfully registered with Learn Platform!
        Here is your credentials that you can change in your account
      </p>
      <h4>User Name</h4>
      <p>{userName}</p>
      <h4>Password</h4>
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
