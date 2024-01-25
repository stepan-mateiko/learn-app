import React, { useState, useEffect } from "react";
import axios from "axios";

import RoutePaths from "../../constants/routes";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import { Trainer } from "../../helpers/mockedTrainers";
import { Student } from "../../helpers/mockedStudents";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const AddTrainer: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const { id: studentId } = user;
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [myTrainers, setMyTrainers] = useState<any[][]>([]);

  const getData = async () => {
    const trainersfromBack = (
      await axios.get("http://localhost:3080/api/trainers")
    ).data.trainers;
    const studentsfromBack = (
      await axios.get("http://localhost:3080/api/students")
    ).data.students;

    setStudents(studentsfromBack);
    setTrainers(trainersfromBack);
  };

  useEffect(() => {
    getData();
  }, []);

  const myData = students.filter((student) => student.id === user.id)[0];

  const [checkedTrainers, setCheckedTrainers] = useState<
    Record<string, boolean>
  >({});

  const handleCheckboxChange = (trainerId: string) => {
    setCheckedTrainers((prevCheckedTrainers) => ({
      ...prevCheckedTrainers,
      [trainerId]: !prevCheckedTrainers[trainerId],
    }));
  };

  const allTrainers = trainers
    .filter((item) => !myData.trainers.includes(item.id))
    .map((trainer) => [
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
        .filter((item) => myData.trainers.includes(item.id))
        .map((trainer) => [
          `${trainer.firstName} ${trainer.lastName}`,
          trainer.specialization,
        ])
    );
  }, [trainers]);

  const headings = ["", "Name", "Specialization"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedIds = trainers
      .filter((item) => Object.keys(checkedTrainers).includes(item.id))
      .map((item) => item.id);

    const selectedTrainers = trainers
      .filter((item) => Object.keys(checkedTrainers).includes(item.id))
      .map((trainer) => [
        `${trainer.firstName} ${trainer.lastName}`,
        trainer.specialization,
      ]);
    const myOldtrainers = myData.trainers;
    const trainersOldStudents = trainers
      .filter((item) => Object.keys(checkedTrainers).includes(item.id))
      .map((item) => [item.id, item.students]);

    await axios.put(`http://localhost:3080/api/students/${studentId}`, {
      trainers: myOldtrainers.concat(selectedIds),
    });

    selectedIds.map(
      async (item) =>
        await axios.put(`http://localhost:3080/api/trainers/${item}`, {
          students: trainersOldStudents
            .filter((e) => e[0] === item)
            .map((e) => e[1])[0]
            .concat(studentId),
        })
    );
    setMyTrainers((prevMyTrainers) => {
      const existingTrainersSet = new Set(
        prevMyTrainers.map((trainer) => trainer[0])
      );

      const uniqueSelectedTrainers = selectedTrainers.filter(
        (trainer) => !existingTrainersSet.has(trainer[0])
      );
      setCheckedTrainers({});
      return [...prevMyTrainers, ...uniqueSelectedTrainers];
    });
  };

  return (
    <div>
      <Breadcrumb
        links={[RoutePaths.MY_ACCOUNT, RoutePaths.ADD_TRAINER]}
        labels={["My Account", "Add Trainer"]}
      />
      <h2>Add Trainer</h2>
      <div>
        <p>Please select trainers for adding them into your trainers list</p>
        <p>* - There is no possibility to remove the trainer.</p>
      </div>
      <div style={{ display: "flex" }}>
        <form action="#" method="post" onSubmit={handleSubmit}>
          <Table title="All trainers" headings={headings} data={allTrainers} />
          <Button
            buttonText="Cancel"
            isLink={true}
            path={RoutePaths.MY_ACCOUNT}
          />
          <Button buttonText="Add" isSubmit={true} />
        </form>

        <Table
          title="My Trainers"
          headings={headings.slice(1)}
          data={myTrainers}
        />
      </div>
    </div>
  );
};

export default AddTrainer;
