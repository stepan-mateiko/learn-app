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
    dispatch(fetchAllTrainers(user.token) as any);
    dispatch(fetchAllStudents(user.token) as any);
  }, [dispatch]);

  const tableTitle = role === "student" ? "My Trainers" : "My students";

  const headings =
    role === "student" ? ["Name", "Specialization"] : ["Name", "Status"];

  const myData =
    role === "student"
      ? {
          ...user,
          ...students.filter(
            (student: StudentsType) => student.ID === user.ID
          )[0],
        }
      : {
          ...user,
          ...trainers.filter(
            (trainer: TrainersType) => trainer.ID === user.ID
          )[0],
        };

  let formattedData: string[][] = [];
  switch (role) {
    case "student":
      if (myData.trainers) {
        formattedData = myData.trainers
          .map((trainerId: string) => {
            const trainer = trainers.find(
              (t: TrainersType) => t.ID === trainerId
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
              (s: StudentsType) => s.ID === studentId
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
    <div className="account">
      <Breadcrumb links={[RoutePaths.MY_ACCOUNT]} labels={["My Account"]} />
      <h2>My Account</h2>
      <div className="account__wrapper">
        {myData && <MyAccountList user={myData} />}
        <div className="account__wrapper-table">
          <Table title={tableTitle} headings={headings} data={formattedData} />
          {role === "student" && (
            <Button
              buttonText="Add trainer"
              isLink={true}
              path={RoutePaths.ADD_TRAINER}
              classOfBtn="account__add-"
            />
          )}
        </div>

        <div className="account__wrapper-delete">
          <Button
            buttonText="Delete account"
            onClick={handleModalOpen}
            classOfBtn="account__delete-"
          />
        </div>
      </div>
      <AccountBox />
      {isModalOpen && (
        <ModalBox
          ID={user.ID ? user.ID : ""}
          token={user.token}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default MyAccount;
