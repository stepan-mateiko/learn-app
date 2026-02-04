import RoutePaths from "../../constants/routes";
import { ACCOUNT_BOX } from "../../constants/text-constants";

import Button from "../Button/Button";

const AccountBox: React.FC = () => {
  return (
    <div className="account__box">
      <h2>{ACCOUNT_BOX.heading}</h2>
      <p>{ACCOUNT_BOX.text}</p>
      <Button
        buttonText="View trainings"
        isLink={true}
        path={RoutePaths.TRAINING}
        classOfBtn="account__box-"
      />
    </div>
  );
};

export default AccountBox;
