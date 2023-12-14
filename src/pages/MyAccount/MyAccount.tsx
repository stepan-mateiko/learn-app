import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { trainersData } from "../../helpers/mockedTrainers";

const MyAccount: React.FC = () => {
  const tableTitle = "My Trainers";
  const formattedData = trainersData.map((trainer) => [
    `${trainer.firstName} ${trainer.lastName}`,
    trainer.specialization,
  ]);
  const headings = ["Name", "Specialization"];
  return (
    <div>
      <Breadcrumb links={["/my-account"]} labels={["My Account"]} />
      <div style={{ display: "flex" }}>
        <MyAccountList />
        <Table title={tableTitle} headings={headings} data={formattedData} />
      </div>
      <AccountBox />
    </div>
  );
};

export default MyAccount;
