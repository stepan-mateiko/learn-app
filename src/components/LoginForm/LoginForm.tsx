import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import RoutePaths from "../../constants/routes";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { UserActionTypes } from "../../store/users/types";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate(RoutePaths.HOME);
    }
  }, [navigate]);

  const login = async (data: any) => {
    console.log(data);
    const response = await axios.post("http://localhost:3080/api/login", data);
    const result = JSON.stringify(response.data);
    localStorage.setItem("users", result);
    console.log(result);
  };
  const handlePostRequest = () => {
    const userToken = (Math.random() * 10).toString();
    localStorage.setItem("token", userToken);
    const loggedUser = {
      userName: userName,
      token: userToken,
      role: "student",
    };
    const apiData = {
      userName: userName,
      password: userPassword,
    };
    localStorage.setItem("user", JSON.stringify(loggedUser));
    login(apiData);
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: loggedUser,
    });
    navigate(RoutePaths.HOME);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
  };

  return (
    <div style={{ margin: "100px auto" }}>
      <h2>Sign in</h2>
      <p>Welcome back</p>
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
          value={userPassword}
          onChange={handleInputChange(setUserPassword)}
        />
        <Button buttonText="Sign In" isSubmit={true} />
      </form>
      <p>OR</p>
      <p>
        Don't have account? <Link to={RoutePaths.JOIN_US}>Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
