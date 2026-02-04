import React, { useState } from "react";

import ChangePasswordSuccess from "../../components/ChangePasswordSuccess/ChangePasswordSuccess";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import { Lock } from "../../components/Icon/Icon";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

import RoutePaths from "../../constants/routes";
import { CHANGE_PASSWORD } from "../../constants/text-constants";

const ChangePassword: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <>
      {!isSuccess && (
        <div className="change-password">
          <Breadcrumb
            links={[RoutePaths.MY_ACCOUNT, RoutePaths.CHANGE_PASSWORD]}
            labels={["My Account", "Change Password"]}
          />
          <h3>{CHANGE_PASSWORD.heading}</h3>
          <div className="change-password__wrapper">
            <h4>
              <Lock /> {CHANGE_PASSWORD.text}
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
