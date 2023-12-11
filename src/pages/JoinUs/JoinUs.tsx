import JoinUsBox from "../../components/JoinUsBox/JoinUsBox";
import JoinUsImage1 from "../../assets/images/join-us-img-1.png";
import JoinUsImage2 from "../../assets/images/join-us-img-2.png";

const JoinUs: React.FC = () => {
  return (
    <div>
      <h2>Join Us</h2>
      <JoinUsBox role="student" imgSrc={JoinUsImage1} />
      <JoinUsBox role="teacher" imgSrc={JoinUsImage2} />
    </div>
  );
};

export default JoinUs;
