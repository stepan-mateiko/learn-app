import { useState } from "react";
import { useDispatch } from "react-redux";

import { handleInputChange } from "../../helpers/helpers";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { loginUserAsync } from "../../store/users/thunk";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUserAsync({ userName, password }) as any);
  };

  return (
    <form
      className="login__form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
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
      <Button buttonText="Sign In" isSubmit={true} classOfBtn="login__" />
    </form>
  );
};

export default LoginForm;
