import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import Search from "../../components/Search/Search";
import {
  trainingsHeadings,
  trainingsData,
} from "../../helpers/mockedTrainings";
import { studentsData, Student } from "../../helpers/mockedStudents";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { trainersData, Trainer } from "../../helpers/mockedTrainers";

const Training: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  const { role } = user;
  const myData =
    role === "student"
      ? (studentsData.filter((student) => student.id === user.id)[0] as Student)
      : (trainersData.filter(
          (trainer) => trainer.id === user.id
        )[0] as Trainer);

  const formattedHeading =
    role === "student"
      ? trainingsHeadings.filter((training) => training !== "Students")
      : trainingsHeadings.filter((training) => training !== "Trainer");

  let formattedData: any[][] = [];

  switch (role) {
    case "student":
      formattedData = trainingsData
        .filter((item) => (myData as Student).trainers.includes(item.id))
        .map((training) => [
          training.date,
          training.name,
          training.type,
          `${
            trainersData.find((item) => item.id === training.trainer)?.firstName
          } ${
            trainersData.find((item) => item.id === training.trainer)?.lastName
          }`,
          training.trainer,
          training.duration,
        ]);
      break;
    case "trainer":
      formattedData = trainingsData
        .filter((item) => (myData as Trainer).students.includes(item.id))
        .map((training) => [
          training.date,
          training.name,
          training.type,
          training.students.map(
            (item) =>
              `${studentsData.find((e) => e.id === item)?.firstName}  ${
                studentsData.find((e) => e.id === item)?.lastName
              }`
          ),
          training.duration,
        ]);
      break;
    default:
      break;
  }
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
        title={role === "student" ? "My passed trainings" : "Results"}
        headings={formattedHeading}
        data={formattedData}
      />
    </div>
  );
};

export default Training;
