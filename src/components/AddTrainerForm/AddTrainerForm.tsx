// TrainerForm.tsx
import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  fetchAllTrainers,
  updateTrainerOnServer,
} from "../../store/trainers/thunk";
import {
  fetchAllStudents,
  updateStudentOnServer,
} from "../../store/students/thunk";
import { StudentsType } from "../../store/students/types";
import { TrainersType } from "../../store/trainers/types";

interface TrainerFormProps {
  onCancel: () => void;
}

const TrainerForm: React.FC<TrainerFormProps> = ({ onCancel }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { id: studentId } = user;
  const trainers = useSelector((state: RootState) => state.trainers);
  const students = useSelector((state: RootState) => state.students);
  const headings = ["", "Name", "Specialization"];
  const myData = students.filter(
    (student: StudentsType) => student.id === user.id
  )[0];

  const [myTrainers, setMyTrainers] = useState<any[][]>([]);
  const [checkedTrainers, setCheckedTrainers] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    dispatch(fetchAllStudents() as any);
    dispatch(fetchAllTrainers() as any);
  }, [dispatch]);

  const handleCheckboxChange = (trainerId: string) => {
    setCheckedTrainers((prevCheckedTrainers) => ({
      ...prevCheckedTrainers,
      [trainerId]: !prevCheckedTrainers[trainerId],
    }));
  };

  const allTrainers = trainers
    .filter((item: TrainersType) => !myData.trainers.includes(item.id))
    .map((trainer: TrainersType) => [
      <input
        type="checkbox"
        checked={checkedTrainers[trainer.id]}
        onChange={() => handleCheckboxChange(trainer.id)}
      />,
      `${trainer.firstName} ${trainer.lastName}`,
      trainer.specialization,
    ]);

  useEffect(() => {
    setMyTrainers(
      trainers
        .filter((item: TrainersType) => myData.trainers.includes(item.id))
        .map((trainer: TrainersType) => [
          `${trainer.firstName} ${trainer.lastName}`,
          trainer.specialization,
        ])
    );
  }, [trainers]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedIds = trainers
      .filter((item: TrainersType) =>
        Object.keys(checkedTrainers).includes(item.id)
      )
      .map((item: TrainersType) => item.id);

    const selectedTrainers = trainers
      .filter((item: TrainersType) =>
        Object.keys(checkedTrainers).includes(item.id)
      )
      .map((trainer: TrainersType) => [
        `${trainer.firstName} ${trainer.lastName}`,
        trainer.specialization,
      ]);
    const myOldtrainers = myData.trainers;
    const trainersOldStudents = trainers
      .filter((item: TrainersType) =>
        Object.keys(checkedTrainers).includes(item.id)
      )
      .map((item: TrainersType) => [item.id, item.students]);
    dispatch(
      updateStudentOnServer(studentId, {
        trainers: myOldtrainers.concat(selectedIds),
      }) as any
    );

    selectedIds.map(async (item: string) => {
      const existingStudents =
        trainersOldStudents
          .filter((e: string) => e[0] === item)
          .map((e: string) => e[1])[0] || [];

      const updatedStudents = Array.from(
        new Set([...existingStudents, studentId])
      );
      dispatch(
        updateTrainerOnServer(item, {
          students: updatedStudents,
        }) as any
      );
    });

    setMyTrainers((prevMyTrainers) => {
      const existingTrainersSet = new Set(
        prevMyTrainers.map((trainer) => trainer[0])
      );

      const uniqueSelectedTrainers = selectedTrainers.filter(
        (trainer: string) => !existingTrainersSet.has(trainer[0])
      );
      console.log(uniqueSelectedTrainers);
      setCheckedTrainers({});
      return [...prevMyTrainers, ...uniqueSelectedTrainers];
    });
  };

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <Table title="All trainers" headings={headings} data={allTrainers} />
      <Button buttonText="Cancel" isLink={true} onClick={onCancel} />
      <Button buttonText="Add" isSubmit={true} />
      <Table
        title="My Trainers"
        headings={headings.slice(1)}
        data={myTrainers}
      />
    </form>
  );
};

export default TrainerForm;
