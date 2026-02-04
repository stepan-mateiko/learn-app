import JoinUsBox from "../../components/JoinUsBox/JoinUsBox";
import { JOIN_US_PAGE } from "../../constants/text-constants";

const JoinUs: React.FC = () => {
  return (
    <div className="join">
      <h2>{JOIN_US_PAGE.heading}</h2>
      <JoinUsBox role="trainer" />
      <JoinUsBox role="student" />
    </div>
  );
};

export default JoinUs;
