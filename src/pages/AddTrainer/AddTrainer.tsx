import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";
import { addTrainerHeadings } from "../../constants/headings";

import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

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
import { ADD_TRAINER } from "../../constants/text-constants";

const AddTrainer: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const trainers = useSelector((state: RootState) => state.trainers);
  const students = useSelector((state: RootState) => state.students);
  const token = localStorage.getItem("token") || "";

  const myData = students.filter(
    (student: StudentsType) => student.ID === user.ID,
  )[0];

  const [myTrainers, setMyTrainers] = useState<string[][]>([]);
  const [checkedTrainers, setCheckedTrainers] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    dispatch(fetchAllStudents(token) as any);
    dispatch(fetchAllTrainers(token) as any);
  }, [dispatch]);

  const handleCheckboxChange = (trainerId: string) => {
    setCheckedTrainers((prevCheckedTrainers) => ({
      ...prevCheckedTrainers,
      [trainerId]: !prevCheckedTrainers[trainerId],
    }));
  };

  const allTrainers = trainers
    .filter((item: TrainersType) => !myData.trainers.includes(item.ID))
    .map((trainer: TrainersType) => [
      <input
        type="checkbox"
        checked={checkedTrainers[trainer.ID]}
        onChange={() => handleCheckboxChange(trainer.ID)}
      />,
      `${trainer.firstName} ${trainer.lastName}`,
      trainer.specialization,
    ]);

  useEffect(() => {
    setMyTrainers(
      trainers
        .filter((item: TrainersType) => myData.trainers.includes(item.ID))
        .map((trainer: TrainersType) => [
          `${trainer.firstName} ${trainer.lastName}`,
          trainer.specialization,
        ]),
    );
  }, [trainers]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedIds = trainers
      .filter((item: TrainersType) =>
        Object.keys(checkedTrainers).includes(item.ID),
      )
      .map((item: TrainersType) => item.ID);

    const selectedTrainers = trainers
      .filter((item: TrainersType) =>
        Object.keys(checkedTrainers).includes(item.ID),
      )
      .map((trainer: TrainersType) => [
        `${trainer.firstName} ${trainer.lastName}`,
        trainer.specialization,
      ]);
    const myOldtrainers = myData.trainers;
    const trainersOldStudents = trainers
      .filter((item: TrainersType) =>
        Object.keys(checkedTrainers).includes(item.ID),
      )
      .map((item: TrainersType) => [item.ID, item.students]);
    dispatch(
      updateStudentOnServer(
        user.ID,
        {
          trainers: myOldtrainers.concat(selectedIds),
        },
        token,
      ) as any,
    );

    selectedIds.map(async (trainerId: string) => {
      const existingStudents =
        trainersOldStudents
          .filter((e: string[]) => e[0] === trainerId)
          .map((e: string[]) => e[1])[0] || [];

      const updatedStudents = Array.from(
        new Set([...existingStudents, user.ID]),
      );
      dispatch(
        updateTrainerOnServer(
          trainerId,
          {
            students: updatedStudents,
          },
          token,
        ) as any,
      );
    });

    setMyTrainers((prevMyTrainers) => {
      const existingTrainersSet = new Set(
        prevMyTrainers.map((trainer) => trainer[0]),
      );

      const uniqueSelectedTrainers = selectedTrainers.filter(
        (trainer: string) => !existingTrainersSet.has(trainer[0]),
      );
      setCheckedTrainers({});
      return [...prevMyTrainers, ...uniqueSelectedTrainers];
    });
  };

  return (
    <div className="add-trainer">
      <Breadcrumb
        links={[RoutePaths.MY_ACCOUNT, RoutePaths.ADD_TRAINER]}
        labels={["My Account", "Add Trainer"]}
      />
      <h2>{ADD_TRAINER.heading}</h2>
      <div className="add-trainer__caption">
        <p>{ADD_TRAINER.text1}</p>
        <p>{ADD_TRAINER.text2}</p>
      </div>
      <div className="add-trainer__wrapper">
        <form action="#" method="post" onSubmit={handleSubmit}>
          <Table
            title="All trainers"
            headings={addTrainerHeadings}
            data={allTrainers}
          />
          <div className="add-trainer__btns">
            <Button
              buttonText="Cancel"
              isLink={true}
              path={RoutePaths.MY_ACCOUNT}
            />
            <Button buttonText="Add" isSubmit={true} />
          </div>
        </form>

        <Table
          title="My Trainers"
          headings={addTrainerHeadings.slice(1)}
          data={myTrainers}
        />
      </div>
    </div>
  );
};

export default AddTrainer;
