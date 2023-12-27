import React, { useState } from "react";
import axios from "axios";

import RoutePaths from "../../constants/routes";

import ChangePasswordSuccess from "../../components/ChangePasswordSuccess/ChangePasswordSuccess";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Lock } from "../../components/Icon/Icon";

interface User {
  id: string;
  password: string;
  createdAt?: string;
  userName?: string;
}

const ChangePassword: React.FC = () => {
  const user: User = JSON.parse(localStorage.getItem("users") || "null");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handlePostRequest = async () => {
    if (user.password === currentPassword && newPassword === confirmPassword) {
      const updatedUser: User = {
        ...user,
        password: newPassword,
      };
      await axios.put(`http://localhost:3080/api/users/${user.id}`, {
        password: newPassword,
      });
      localStorage.setItem("users", JSON.stringify(updatedUser));
      setIsSuccess(true);
    } else {
      console.log(user.password);
      setConfirmPassword("");
      setNewPassword("");
      setCurrentPassword("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
  };

  return (
    <>
      {!isSuccess && (
        <div>
          <h3>Security</h3>
          <div style={{ display: "flex" }}>
            <div>
              <Lock /> Change password
            </div>
            <form action="#" method="post" onSubmit={handleSubmit}>
              <Input
                type="password"
                value={currentPassword}
                label="Current password"
                onChange={handleInputChange(setCurrentPassword)}
              />
              <Input
                type="password"
                value={newPassword}
                label="New password"
                onChange={handleInputChange(setNewPassword)}
              />
              <Input
                type="password"
                value={confirmPassword}
                label="Confirm new password"
                onChange={handleInputChange(setConfirmPassword)}
              />
              <div>
                <Button
                  buttonText="Cancel"
                  isLink={true}
                  path={RoutePaths.MY_ACCOUNT}
                />
                <Button buttonText="Change password" isSubmit={true} />
              </div>
            </form>
          </div>
        </div>
      )}
      {isSuccess && <ChangePasswordSuccess />}
    </>
  );
};

export default ChangePassword;
