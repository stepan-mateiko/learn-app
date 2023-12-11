import Button from "../Button/Button";

interface JoinUsBoxProps {
  role: string;
  imgSrc: string;
}
const JoinUsBox: React.FC<JoinUsBoxProps> = ({ role, imgSrc }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h3>Register as {role}</h3>
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <Button buttonText="Join Us" isLink={true} path="registration" />
      </div>
      <div>
        <img src={imgSrc} alt="join us" />
      </div>
    </div>
  );
};

export default JoinUsBox;
