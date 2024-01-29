import { useState, useEffect } from "react";
import axios from "axios";

import RoutePaths from "../../constants/routes";

import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Trainer } from "../../helpers/mockedTrainers";
import Button from "../../components/Button/Button";
import ModalBox from "../../components/ModalBox/ModalBox";
import { Student } from "../../helpers/mockedStudents";

const MyAccount: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const { role } = user;
  const tableTitle = role === "student" ? "My Trainers" : "My students";

  const headings =
    role === "student" ? ["Name", "Specialization"] : ["Name", "Status"];
  const myData =
    role === "student"
      ? { ...user, ...students.filter((student) => student.id === user.id)[0] }
      : { ...user, ...trainers.filter((trainer) => trainer.id === user.id)[0] };

  let formattedData: string[][] = [];
  switch (role) {
    case "student":
      if (myData.trainers) {
        formattedData = (myData as Student).trainers
          .map((trainerId) => {
            const trainer = trainers.find((t) => t.id === trainerId);
            return trainer
              ? [
                  `${trainer.firstName} ${trainer.lastName}`,
                  trainer.specialization,
                ]
              : [];
          })
          .filter(Boolean);
      }
      break;
    case "trainer":
      if (myData.students) {
        formattedData = (myData as Trainer).students
          .map((studentId) => {
            const student = students.find((s) => s.id === studentId);
            return student
              ? [
                  `${student.firstName} ${student.lastName}`,
                  student.isActive ? "Active" : "Not active",
                ]
              : [];
          })
          .filter(Boolean);
      }
      break;
    default:
      break;
  }
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Breadcrumb links={[RoutePaths.MY_ACCOUNT]} labels={["My Account"]} />
      <div style={{ display: "flex" }}>
        {myData && <MyAccountList user={myData} />}
        <Table title={tableTitle} headings={headings} data={formattedData} />
        {role === "student" && (
          <div>
            <Button buttonText="Delete account" onClick={handleModalOpen} />
            <Button
              buttonText="Add trainer"
              isLink={true}
              path={RoutePaths.ADD_TRAINER}
            />
          </div>
        )}
      </div>
      <AccountBox />
      {isModalOpen && (
        <ModalBox
          id={user.id}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default MyAccount;
