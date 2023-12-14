import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import { trainersData } from "../../helpers/mockedTrainers";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const AddTrainer: React.FC = () => {
  const formattedData = trainersData.map((trainer) => [
    `${trainer.firstName} ${trainer.lastName}`,
    trainer.specialization,
  ]);
  const myTrainers = [
    ["John Snow", "React"],
    ["Tyrion Lannister", "C++"],
  ];
  const headings = ["Name", "Specialization"];
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
        <form action="#" method="post">
          <Table
            title="All trainers"
            headings={headings}
            data={formattedData}
          />
          <Button buttonText="Add" isSubmit={true} />
        </form>

        <Table title="My Trainers" headings={headings} data={myTrainers} />
      </div>
    </div>
  );
};

export default AddTrainer;
