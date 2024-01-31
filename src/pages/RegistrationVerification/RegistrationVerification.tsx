import RoutePaths from "../../constants/routes";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

import { RegistrationSuccess } from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

const RegistrationVerification: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
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
      <p>{user.password}</p>
      <Button
        buttonText="My account"
        isLink={true}
        path={RoutePaths.MY_ACCOUNT}
      />
    </div>
  );
};

export default RegistrationVerification;
