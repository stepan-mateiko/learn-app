import RoutePaths from "../../constants/routes";

import Button from "../Button/Button";
import JoinUsImage1 from "../../assets/images/join-us-img-1.png";
import JoinUsImage2 from "../../assets/images/join-us-img-2.png";

import { JoinUsBoxProps } from "../../constants/props";

const JoinUsBox: React.FC<JoinUsBoxProps> = ({ role }) => {
  return (
    <div className="join__box">
      <div className="join__box-info">
        <h3>Register as {role}</h3>
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
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
