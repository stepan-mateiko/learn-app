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
    setFilteredTrainings(
      trainingsFromBack
        .filter(
          (item: any) => item.student === user.id || item.trainer === user.id
        )
        .map((training: any) => [
          training.date,
          training.name,
          training.type,
          role === "student"
            ? `${
                trainersfromBack.find(
                  (item: Trainer) => item.id === training.trainer
                )?.firstName
              } ${
                trainersfromBack.find(
                  (item: Trainer) => item.id === training.trainer
                )?.lastName
              }`
            : `${
                studentsfromBack.find(
                  (item: Student) => item.id === training.student
                )?.firstName
              } ${
                studentsfromBack.find(
                  (item: Student) => item.id === training.student
                )?.lastName
              }`,
          training.duration,
        ])
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilterChange = (filteredData: any[][]) => {
    setFilteredTrainings(filteredData);
  };

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);

    const filteredByDate = trainings
      .filter((item) => item.student === user.id || item.trainer === user.id)
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
      role === "student"
        ? `${
            trainers.find((item) => item.id === training.trainer)?.firstName
          } ${trainers.find((item) => item.id === training.trainer)?.lastName}`
        : `${
            students.find((item) => item.id === training.student)?.firstName
          } ${students.find((item) => item.id === training.student)?.lastName}`,

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
            data={filteredTrainings}
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
