import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import RoutePaths from "../../constants/routes";

import { handleInputChange } from "../../helpers/helpers";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { loginUserAsync } from "../../store/users/thunk";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUserAsync({ userName, password }) as any);
    navigate(RoutePaths.HOME); //later can be deleted
  };

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <Input
        type="text"
        label="User name"
        placeholder="Enter user name"
        value={userName}
        onChange={handleInputChange(setUserName)}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={handleInputChange(setPassword)}
      />
      <Button buttonText="Sign In" isSubmit={true} />
    </form>
  );
};

export default LoginForm;
