import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import Search from "../../components/Search/Search";
import {
  trainingsHeadings,
  trainingsData,
} from "../../helpers/mockedTrainings";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

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
      <Breadcrumb
        links={["/my-account", "/my-account/trainings"]}
        labels={["My Account", "Trainings"]}
      />
      <h2>Trainings</h2>
      <Button
        buttonText="Add training"
        isLink={true}
        path="my-account/trainings/add-passed-training"
      />
      <div style={{ display: "flex" }}>
        <div>
          <Search />
        </div>
        <div>
          <MyDatePicker />
        </div>
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
