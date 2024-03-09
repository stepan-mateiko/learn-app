import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";
import { handleInputChange } from "../../helpers/helpers";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { RootState } from "../../store";
import { updateUserAsync } from "../../store/users/thunk";

interface PasswordFormProps {
  setIsSuccess: (isSuccess: boolean) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ setIsSuccess }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.password === currentPassword && newPassword === confirmPassword) {
      dispatch(
        updateUserAsync(user.ID, { ...user, password: newPassword }) as any
      );
      setIsSuccess(true);
    } else if (newPassword !== confirmPassword) {
      console.log("New password doesn't match confirmed password");
      setConfirmPassword("");
      setNewPassword("");
      setCurrentPassword("");
    } else {
      console.log("Wrong password");
      setConfirmPassword("");
      setNewPassword("");
      setCurrentPassword("");
    }
  };
  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className="change-password__form"
    >
      <Input
        type="password"
        value={currentPassword}
        label="Current password"
        onChange={handleInputChange(setCurrentPassword)}
        placeholder="Enter current password"
      />
      <Input
        type="password"
        value={newPassword}
        label="New password"
        onChange={handleInputChange(setNewPassword)}
        placeholder="Enter new password"
      />
      <Input
        type="password"
        value={confirmPassword}
        label="Confirm new password"
        onChange={handleInputChange(setConfirmPassword)}
        placeholder="Confirm new password"
      />
      <div className="change-password__btns">
        <Button
          buttonText="Cancel"
          isLink={true}
          path={RoutePaths.MY_ACCOUNT}
        />
        <Button buttonText="Change password" isSubmit={true} />
      </div>
    </form>
  );
};

export default PasswordForm;
