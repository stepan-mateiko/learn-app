import AccountBox from "../../components/AccountBox/AccountBox";
import MyAccountList from "../../components/MyAccountList/MyAccountList";
import Table from "../../components/Table/Table";

const MyAccount: React.FC = () => {
  const tableTitle = "My Trainers";
  const tableHeadings = ["Name", "Specialization"];
  const tableData = [
    ["Elizabeth Swan", "PHP"],
    ["Will Turner", "JavaScript"],
    ["Jack Sparrow", "Python"],
    // ... additional rows
  ];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <MyAccountList />
        <Table title={tableTitle} headings={tableHeadings} data={tableData} />
      </div>
      <AccountBox />
    </div>
  );
};

export default MyAccount;
