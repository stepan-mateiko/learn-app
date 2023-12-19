import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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
      navigate("/home");
    }
  }, [navigate]);

  const handlePostRequest = () => {
    const userToken = (Math.random() * 10).toString();
    localStorage.setItem("token", userToken);
    const loggedUser = {
      userName: userName,
      token: userToken,
      role: "student",
    };
    localStorage.setItem("user", JSON.stringify(loggedUser));
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: loggedUser,
    });
    navigate("/home");
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
        Don't have account? <Link to="/join-us">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
