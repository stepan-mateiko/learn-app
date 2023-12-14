import { useState } from "react";

import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { trainersData } from "../../helpers/mockedTrainers";
import Button from "../../components/Button/Button";
import ModalBox from "../../components/ModalBox/ModalBox";

const MyAccount: React.FC = () => {
  const tableTitle = "My Trainers";
  const formattedData = trainersData.map((trainer) => [
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
        <MyAccountList />
        <Table title={tableTitle} headings={headings} data={formattedData} />
        <Button buttonText="Delete account" onClick={handleModalOpen} />
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
