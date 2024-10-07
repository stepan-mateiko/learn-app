import RoutePaths from "../../constants/routes";

import Button from "../Button/Button";

const AccountBox: React.FC = () => {
  return (
    <div className="account__box">
      <h2>My Trainings</h2>
      <p>
        The Training Section is interactive, allowing you to engage with
        trainers and fellow learners, participate in quizzes, and track your
        progress. All our courses are flexible and adaptable to your schedule
        and learning speed.
      </p>
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
