import RoutePaths from "../../constants/routes";
import axios from "axios";

import { RegistrationSuccess } from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import { useState } from "react";

interface User {
  userName: string;
  password: string;
}
const RegistrationVerification: React.FC = () => {
  const [user, setUser] = useState<User>({ userName: "", password: "" });
  const getData = async () => {
    try {
      const userName = localStorage.getItem("user");
      const result = await axios.get(
        `http://localhost:3080/api/users/${userName}`
      );
      setUser(result.data);
    } catch (error) {}
  };
  getData();
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
