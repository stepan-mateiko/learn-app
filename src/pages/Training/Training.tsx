import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";
import { trainingsHeadings } from "../../constants/headings";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import Search from "../../components/Search/Search";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { RootState } from "../../store";
import { TrainingsType } from "../../store/trainings/types";
import { fetchAllStudents } from "../../store/students/thunk";
import { fetchAllTrainers } from "../../store/trainers/thunk";
import { fetchAllTrainings } from "../../store/trainings/thunk";
import { formatTrainingData } from "../../helpers/helpers";

const Training: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { role } = user;
  const formattedHeading =
    role === "student"
      ? trainingsHeadings.filter((training) => training !== "Student")
      : trainingsHeadings.filter((training) => training !== "Trainer");
  const trainers = useSelector((state: RootState) => state.trainers);
  const students = useSelector((state: RootState) => state.students);
  const trainings = useSelector((state: RootState) => state.trainings);

  const [filteredTrainings, setFilteredTrainings] = useState<string[][]>([]);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  useEffect(() => {
    dispatch(fetchAllStudents() as any);
    dispatch(fetchAllTrainers() as any);
    dispatch(fetchAllTrainings() as any);

    setFilteredTrainings(
      formatTrainingData(
        role,
        trainings.filter(
          (item: TrainingsType) =>
            item.student === user.id || item.trainer === user.id
        ),
        trainers,
        students
      )
    );
  }, [dispatch]);

  const handleFilterChange = (filteredData: string[][]) => {
    setFilteredTrainings(filteredData);
  };

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);

    const filteredByDate = trainings
      .filter(
        (item: TrainingsType) =>
          item.student === user.id || item.trainer === user.id
      )
      .filter((training: TrainingsType) => {
        const trainingDate = new Date(training.date);
        return (
          (!startDate || trainingDate >= startDate) &&
          (!endDate || trainingDate <= endDate)
        );
      });

    const formattedFilteredData = formatTrainingData(
      role,
      filteredByDate,
      trainers,
      students
    );

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
