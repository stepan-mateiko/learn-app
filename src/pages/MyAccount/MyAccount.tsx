import { useState } from "react";

import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { trainersData } from "../../helpers/mockedTrainers";
import Button from "../../components/Button/Button";
import ModalBox from "../../components/ModalBox/ModalBox";
import { studentsData } from "../../helpers/mockedStudents";

const MyAccount: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  const myData = studentsData.filter((student) => student.id === user.id)[0];
  const tableTitle = "My Trainers";
  const formattedData = trainersData
    .filter((item) => myData.trainers.includes(item.id))
    .map((trainer) => [
      `${trainer.firstName} ${trainer.lastName}`,
      trainer.specialization,
    ]);
  const headings = ["Name", "Specialization"];
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Breadcrumb links={["/my-account"]} labels={["My Account"]} />
      <div style={{ display: "flex" }}>
        <MyAccountList user={user} />
        <Table title={tableTitle} headings={headings} data={formattedData} />
        <div>
          <Button buttonText="Delete account" onClick={handleModalOpen} />
          <Button
            buttonText="Add trainer"
            isLink={true}
            path="my-account/add-trainer"
          />
        </div>
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
