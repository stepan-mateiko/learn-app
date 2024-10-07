import JoinUsBox from "../../components/JoinUsBox/JoinUsBox";

const JoinUs: React.FC = () => {
  return (
    <div className="join">
      <h2>Join Us</h2>
      <JoinUsBox role="trainer" />
      <JoinUsBox role="student" />
    </div>
  );
};

export default JoinUs;
