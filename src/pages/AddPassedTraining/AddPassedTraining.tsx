import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { trainersData } from "../../helpers/mockedTrainers";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import Toaster from "../../components/Toaster/Toaster";

const AddPassedTraining: React.FC = () => {
  const formattedData = trainersData
    .map((trainer) => [`${trainer.firstName} ${trainer.lastName}`])
    .map((item) => item[0]);
  return (
    <div>
      <Breadcrumb
        links={[
          "/my-account",
          "/my-account/trainings",
          "/my-account/trainings/add-passed-training",
        ]}
        labels={["My Account", "Trainings", "Add Passed Training"]}
      />
      <h2>Add passed training</h2>
      <form action="#" method="post">
        <h3>Training</h3>
        <Input
          type="text"
          value=""
          label="Name"
          onChange={(e) => console.log(e)}
        />
        <Input
          type="date"
          value=""
          label="Training start date"
          onChange={(e) => console.log(e)}
        />
        <Input
          type="text"
          value=""
          label="Duration"
          onChange={(e) => console.log(e)}
        />
        <Input
          type="select"
          value=""
          label="Type"
          onChange={(e) => console.log(e)}
          options={["Webinar", "Full course"]}
        />
        <Input
          type="textarea"
          value=""
          label="Description"
          onChange={(e) => console.log(e)}
        />
        <Input
          type="select"
          value=""
          label="Add trainers"
          onChange={(e) => console.log(e)}
          options={formattedData}
        />
        <div>
          <Button buttonText="Cancel" />{" "}
          <Button buttonText="Add" isSubmit={true} />
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default AddPassedTraining;
