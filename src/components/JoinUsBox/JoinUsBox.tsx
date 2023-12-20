import RoutePaths from "../../constants/routes";
import Button from "../Button/Button";
import JoinUsImage1 from "../../assets/images/join-us-img-1.png";
import JoinUsImage2 from "../../assets/images/join-us-img-2.png";

interface JoinUsBoxProps {
  role: string;
}
const JoinUsBox: React.FC<JoinUsBoxProps> = ({ role }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h3>Register as {role}</h3>
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <Button
          buttonText="Join Us"
          isLink={true}
          path={`${RoutePaths.REGISTRATION}/${role}`}
        />
      </div>
      <div>
        <img
          src={role === "trainer" ? JoinUsImage1 : JoinUsImage2}
          alt="join us"
        />
      </div>
    </div>
  );
};

export default JoinUsBox;
