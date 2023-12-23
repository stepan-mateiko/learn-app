import { useState } from "react";

import RoutePaths from "../../constants/routes";

import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { trainersData, Trainer } from "../../helpers/mockedTrainers";
import Button from "../../components/Button/Button";
import ModalBox from "../../components/ModalBox/ModalBox";
import { studentsData, Student } from "../../helpers/mockedStudents";

const MyAccount: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { role } = user;
  const tableTitle = role === "student" ? "My Trainers" : "My students";
  const headings =
    role === "student" ? ["Name", "Specialization"] : ["Name", "Status"];
  const myData =
    role === "student"
      ? (studentsData.filter((student) => student.id === user.id)[0] as Student)
      : (trainersData.filter(
          (trainer) => trainer.id === user.id
        )[0] as Trainer);

  let formattedData: string[][] = [];
  switch (role) {
    case "student":
      formattedData = (myData as Student).trainers
        .map((trainerId) => {
          const trainer = trainersData.find((t) => t.id === trainerId);
          return trainer
            ? [
                `${trainer.firstName} ${trainer.lastName}`,
                trainer.specialization,
              ]
            : [];
        })
        .filter(Boolean);
      break;
    case "trainer":
      formattedData = (myData as Trainer).students
        .map((studentId) => {
          const student = studentsData.find((s) => s.id === studentId);
          return student
            ? [
                `${student.firstName} ${student.lastName}`,
                student.isActive ? "Active" : "Not active",
              ]
            : [];
        })
        .filter(Boolean);
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
        <MyAccountList user={user} />
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
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default MyAccount;
