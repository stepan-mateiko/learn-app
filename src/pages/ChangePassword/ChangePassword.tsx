import React, { useState } from "react";

import ChangePasswordSuccess from "../../components/ChangePasswordSuccess/ChangePasswordSuccess";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import { Lock } from "../../components/Icon/Icon";

const ChangePassword: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <>
      {!isSuccess && (
        <div className="change-password">
          <h3>Security</h3>
          <div className="change-password__wrapper">
            <h4>
              <Lock /> Change password
            </h4>
            <PasswordForm setIsSuccess={setIsSuccess} />
          </div>
        </div>
      )}
      {isSuccess && <ChangePasswordSuccess />}
    </>
  );
};

export default ChangePassword;
