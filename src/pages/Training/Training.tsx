import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import {
  trainingsHeadings,
  trainingsData,
} from "../../helpers/mockedTrainings";

const Training: React.FC = () => {
  const formattedHeading = trainingsHeadings.filter(
    (training) => training !== "Students"
  );
  const formattedData = trainingsData.map((training) => [
    training.date,
    training.name,
    training.type,
    training.trainer,
    training.duration,
  ]);
  return (
    <div>
      <h2>Trainings</h2>
      <Button buttonText="Add training" />
      <div style={{ display: "flex" }}>
        <div>Search</div>
        <div>Date</div>
      </div>
      <Table
        title="My passed trainings"
        headings={formattedHeading}
        data={formattedData}
      />
    </div>
  );
};

export default Training;
