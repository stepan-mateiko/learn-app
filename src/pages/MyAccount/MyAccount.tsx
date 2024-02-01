import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";

import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import Button from "../../components/Button/Button";
import ModalBox from "../../components/ModalBox/ModalBox";

import { RootState } from "../../store";
import { fetchAllTrainers } from "../../store/trainers/thunk";
import { StudentsType } from "../../store/students/types";
import { TrainersType } from "../../store/trainers/types";
import { fetchAllStudents } from "../../store/students/thunk";

const MyAccount: React.FC = () => {
  const dispatch = useDispatch();
  const trainers = useSelector((state: RootState) => state.trainers);
  const students = useSelector((state: RootState) => state.students);
  const user = useSelector((state: RootState) => state.user);
  const { role } = user;

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAllTrainers() as any);
    dispatch(fetchAllStudents() as any);
  }, [dispatch]);

  const tableTitle = role === "student" ? "My Trainers" : "My students";

  const headings =
    role === "student" ? ["Name", "Specialization"] : ["Name", "Status"];

  const myData =
    role === "student"
      ? {
          ...user,
          ...students.filter(
            (student: StudentsType) => student.id === user.id
          )[0],
        }
      : {
          ...user,
          ...trainers.filter(
            (trainer: TrainersType) => trainer.id === user.id
          )[0],
        };

  let formattedData: string[][] = [];
  switch (role) {
    case "student":
      if (myData.trainers) {
        formattedData = myData.trainers
          .map((trainerId: string) => {
            const trainer = trainers.find(
              (t: TrainersType) => t.id === trainerId
            );
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
        formattedData = myData.students
          .map((studentId: string) => {
            const student = students.find(
              (s: StudentsType) => s.id === studentId
            );
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
          id={user.id ? user.id : ""}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default MyAccount;
