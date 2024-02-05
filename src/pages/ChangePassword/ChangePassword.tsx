import React, { useState } from "react";

import ChangePasswordSuccess from "../../components/ChangePasswordSuccess/ChangePasswordSuccess";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import { Lock } from "../../components/Icon/Icon";

const ChangePassword: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <>
      {!isSuccess && (
        <div>
          <h3>Security</h3>
          <div style={{ display: "flex" }}>
            <div>
              <Lock /> Change password
            </div>
            <PasswordForm setIsSuccess={setIsSuccess} />
          </div>
        </div>
      )}
      {isSuccess && <ChangePasswordSuccess />}
    </>
  );
};

export default ChangePassword;
