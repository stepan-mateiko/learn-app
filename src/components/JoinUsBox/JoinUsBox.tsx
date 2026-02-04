import RoutePaths from "../../constants/routes";

import Button from "../Button/Button";
import JoinUsImage1 from "../../assets/images/join-us-img-1.png";
import JoinUsImage2 from "../../assets/images/join-us-img-2.png";

import { JoinUsBoxProps } from "../../constants/props";
import { JOIN_US } from "../../constants/text-constants";

const JoinUsBox: React.FC<JoinUsBoxProps> = ({ role }) => {
  return (
    <div className="join__box">
      <div className="join__box-info">
        <h3>
          {JOIN_US.heading} {role}
        </h3>
        <p>{JOIN_US.text}</p>
        <Button
          buttonText="Join Us"
          isLink={true}
          path={`${RoutePaths.REGISTRATION}/${role}`}
          classOfBtn="join__"
        />
      </div>
      <div className="join__box-image">
        <img
          src={role === "trainer" ? JoinUsImage1 : JoinUsImage2}
          alt="join us"
        />
      </div>
    </div>
  );
};

export default JoinUsBox;
