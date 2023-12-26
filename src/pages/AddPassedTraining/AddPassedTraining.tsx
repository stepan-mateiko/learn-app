import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import RoutePaths from "../../constants/routes";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { Trainer } from "../../helpers/mockedTrainers";

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
  const [trainersList, setTrainersList] = useState<Trainer[]>([]);

  const getTrainers = async () => {
    const trainersfromBack = (
      await axios.get("http://localhost:3080/api/trainers")
    ).data.trainers;
    setTrainersList(trainersfromBack);
  };

  useEffect(() => {
    getTrainers();
  }, []);

  const formattedTrainers = trainersList.map(
    (trainer) => `${trainer.firstName} ${trainer.lastName}`
  );

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string | number | boolean) => {
      if (typeof newValue === "string") {
        setter(newValue);
      }
    };

  const handlePostRequest = async () => {
    let newTraining = {
      duration: trainingDuration,
      trainer: trainersList.filter(
        (trainer) =>
          `${trainer.firstName} ${trainer.lastName}` === trainingTrainer
      )[0].id,
      type: trainingType,
      date: trainingsDate,
      name: trainingName,
      description: trainingDescription,
      student: user.id,
    };
    await axios.post("http://localhost:3080/api/trainings", newTraining);
    console.log(newTraining);
  };

  const handleSubmit = () => {
    handlePostRequest();
    notify();
    setTimeout(() => navigate(RoutePaths.TRAINING), 3000);
  };
  return (
    <div>
      <Breadcrumb
        links={[
          RoutePaths.MY_ACCOUNT,
          RoutePaths.TRAINING,
          RoutePaths.ADD_PASSED_TRAINING,
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
          options={formattedTrainers}
        />
        <div>
          <Button
            buttonText="Cancel"
            isLink={true}
            path={RoutePaths.TRAINING}
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
