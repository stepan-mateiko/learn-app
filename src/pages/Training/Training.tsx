import axios from "axios";
import { useEffect, useState } from "react";
import RoutePaths from "../../constants/routes";
import { Trainer } from "../../helpers/mockedTrainers";
import {
  trainingsHeadings,
  TrainingInterface,
} from "../../helpers/mockedTrainings";
import { Student } from "../../helpers/mockedStudents";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import Search from "../../components/Search/Search";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

interface User {
  userName: string;
  email: string;
  userPassword: string;
  role: string;
  id: string;
}

const Training: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [trainings, setTrainings] = useState<TrainingInterface[]>([]);
  const [filteredTrainings, setFilteredTrainings] = useState<any[][]>([]);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const user = JSON.parse(localStorage.getItem("user") || "null") as User;
  const { role } = user;
  const formattedHeading =
    role === "student"
      ? trainingsHeadings.filter((training) => training !== "Students")
      : trainingsHeadings.filter((training) => training !== "Trainer");

  const getData = async () => {
    const trainersfromBack = (
      await axios.get("http://localhost:3080/api/trainers")
    ).data.trainers;
    const studentsfromBack = (
      await axios.get("http://localhost:3080/api/students")
    ).data.students;
    const trainingsFromBack = (
      await axios.get("http://localhost:3080/api/trainings")
    ).data.trainings;
    setStudents(studentsfromBack);
    setTrainers(trainersfromBack);
    setTrainings(trainingsFromBack);
  };

  useEffect(() => {
    getData();
  }, []);

  let formattedData: any[][] = [];
  const myData =
    role === "student"
      ? (students.filter((student) => student.id === user.id)[0] as Student)
      : (trainers.filter((trainer) => trainer.id === user.id)[0] as Trainer);

  switch (role) {
    case "student":
      formattedData = trainings
        .filter((item) => (myData as Student).id === item.student)
        .map((training) => [
          training.date,
          training.name,
          training.type,
          `${
            trainers.find((item) => item.id === training.trainer)?.firstName
          } ${trainers.find((item) => item.id === training.trainer)?.lastName}`,
          training.duration,
        ]);
      break;
    case "trainer":
      formattedData = trainings
        .filter((item) => (myData as Trainer).id === item.trainer)
        .map((training) => [
          training.date,
          training.name,
          training.type,
          `${students.find((e) => e.id === training.student)?.firstName}  ${
            students.find((e) => e.id === training.student)?.lastName
          }`,
          training.duration,
        ]);

      break;
    default:
      break;
  }
  // useEffect(() => {
  //   setFilteredTrainings(formattedData);
  // }, [formattedData]);

  const handleFilterChange = (filteredData: any[][]) => {
    setFilteredTrainings(filteredData);
  };

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);

    const filteredByDate = trainings
      .filter(
        (item) => item.student === myData.id || item.trainer === myData.id
      )
      .filter((training) => {
        const trainingDate = new Date(training.date);
        return (
          (!startDate || trainingDate >= startDate) &&
          (!endDate || trainingDate <= endDate)
        );
      });

    const formattedFilteredData = filteredByDate.map((training) => [
      training.date,
      training.name,
      training.type,
      `${trainers.find((item) => item.id === training.trainer)?.firstName} ${
        trainers.find((item) => item.id === training.trainer)?.lastName
      }`,
      training.duration,
    ]);

    setFilteredTrainings(formattedFilteredData);
  };

  return (
    <div>
      <Breadcrumb
        links={[RoutePaths.MY_ACCOUNT, RoutePaths.TRAINING]}
        labels={["My Account", "Trainings"]}
      />
      <h2>Trainings</h2>
      {role === "student" && (
        <Button
          buttonText="Add training"
          isLink={true}
          path={RoutePaths.ADD_PASSED_TRAINING}
        />
      )}
      <div style={{ display: "flex" }}>
        <div>
          <Search
            role={role}
            data={formattedData}
            update={handleFilterChange}
          />
        </div>
        <div>
          <MyDatePicker
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
            onDateChange={handleDateChange}
          />
        </div>
      </div>
      <Table
        title={role === "student" ? "My passed trainings" : "Results"}
        headings={formattedHeading}
        data={filteredTrainings.length > 0 ? filteredTrainings : []}
      />
    </div>
  );
};

export default Training;
