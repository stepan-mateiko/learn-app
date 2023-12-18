import React, { useState } from "react";

import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import { trainersData } from "../../helpers/mockedTrainers";
import { studentsData } from "../../helpers/mockedStudents";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const AddTrainer: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  const myData = studentsData.filter((student) => student.id === user.id)[0];
  const [checkedTrainers, setCheckedTrainers] = useState<
    Record<string, boolean>
  >({});

  const handleCheckboxChange = (trainerId: string) => {
    setCheckedTrainers((prevCheckedTrainers) => ({
      ...prevCheckedTrainers,
      [trainerId]: !prevCheckedTrainers[trainerId],
    }));
  };

  const allTrainers = trainersData.map((trainer) => [
    <input
      type="checkbox"
      checked={checkedTrainers[trainer.id]}
      onChange={() => handleCheckboxChange(trainer.id)}
    />,
    `${trainer.firstName} ${trainer.lastName}`,
    trainer.specialization,
  ]);

  const [myTrainers, setMyTrainers] = useState<any[][]>(
    trainersData
      .filter((item) => myData.trainers.includes(item.id))
      .map((trainer) => [
        `${trainer.firstName} ${trainer.lastName}`,
        trainer.specialization,
      ])
  );

  const headings = ["", "Name", "Specialization"];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedTrainers = trainersData
      .filter((item) => Object.keys(checkedTrainers).includes(item.id))
      .map((trainer) => [
        `${trainer.firstName} ${trainer.lastName}`,
        trainer.specialization,
      ]);

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
        links={["/my-account", "/my-account/add-trainer"]}
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
