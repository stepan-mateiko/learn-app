import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";
import { handleInputChange } from "../../helpers/helpers";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { RootState } from "../../store";
import { updateUserAsync } from "../../store/users/thunk";
import { logoutUser } from "../../store/users/actions";

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
        updateUserAsync(user.id, { ...user, password: newPassword }) as any
      );
      setTimeout(() => {
        dispatch(logoutUser() as any);
      }, 1000);
      setIsSuccess(true);
    } else {
      console.log("Wrong password");
      setConfirmPassword("");
      setNewPassword("");
      setCurrentPassword("");
    }
  };
  return (
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
  );
};

export default PasswordForm;
