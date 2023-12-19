import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { trainersData } from "../../helpers/mockedTrainers";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";

const AddPassedTraining: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  const navigate = useNavigate();
  const notify = () => toast.success("Training added!");
  const [trainingName, setTrainingName] = useState<string>("");
  const [trainingsDate, setTrainingsDate] = useState<string>("");
  const [trainingDuration, setTrainingDuration] = useState<string>("0");
  const [trainingType, setTrainingType] = useState<string>("");
  const [trainingDescription, setTrainingDescription] = useState<string>("");
  const [trainingTrainer, setTrainingTrainer] = useState<string>("");

  const formattedData = trainersData
    .map((trainer) => [`${trainer.firstName} ${trainer.lastName}`])
    .map((item) => item[0]);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handlePostRequest = () => {
    const { v4: uuidv4 } = require("uuid");
    let newTraining = {
      id: uuidv4(),
      duration: trainingDuration,
      trainer: trainingTrainer,
      type: trainingType,
      date: trainingsDate,
      name: trainingName,
      description: trainingDescription,
      students: [user.id],
    };
    localStorage.setItem("trainings", JSON.stringify(newTraining));
    console.log(newTraining);
  };

  const handleSubmit = () => {
    handlePostRequest();
    notify();
    setTimeout(() => navigate("/my-account/trainings"), 3000);
  };
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
          value={trainingName}
          label="Name"
          onChange={handleInputChange(setTrainingName)}
        />
        <Input
          type="date"
          value={trainingsDate}
          label="Training start date"
          onChange={handleInputChange(setTrainingsDate)}
        />
        <Input
          type="number"
          value={trainingDuration}
          label="Duration"
          onChange={handleInputChange(setTrainingDuration)}
        />
        <Input
          type="select"
          value={trainingType}
          label="Type"
          onChange={handleInputChange(setTrainingType)}
          options={["Webinar", "Full course", "Bootcamp"]}
        />
        <Input
          type="textarea"
          value={trainingDescription}
          label="Description"
          onChange={handleInputChange(setTrainingDescription)}
        />
        <Input
          type="select"
          value={trainingTrainer}
          label="Add trainers"
          onChange={handleInputChange(setTrainingTrainer)}
          options={formattedData}
        />
        <div>
          <Button
            buttonText="Cancel"
            isLink={true}
            path="my-account/trainings"
          />
          <Button buttonText="Add" onClick={handleSubmit} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPassedTraining;
