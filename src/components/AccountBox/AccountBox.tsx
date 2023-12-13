import Button from "../Button/Button";

const AccountBox: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>My Trainings</h2>
      <p>
        The Training Section is interactive, allowing you to engage with
        trainers and fellow learners, participate in quizzes, and track your
        progress. All our courses are flexible and adaptable to your schedule
        and learning speed.
      </p>
      <Button buttonText="View trainings" isLink={true} path="training" />
    </div>
  );
};

export default AccountBox;
