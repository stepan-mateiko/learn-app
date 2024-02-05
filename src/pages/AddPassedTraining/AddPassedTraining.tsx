import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { handleInputChange } from "../../helpers/helpers";

import RoutePaths from "../../constants/routes";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchAllTrainers } from "../../store/trainers/thunk";
import { fetchAllTrainingTypes } from "../../store/trainingTypes/thunk";
import { TrainersType } from "../../store/trainers/types";
import { TrainingTypesType } from "../../store/trainingTypes/types";
import { addTrainingOnServer } from "../../store/trainings/thunk";
import { TrainingsType } from "../../store/trainings/types";

const AddPassedTraining: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);
  const trainersList = useSelector((state: RootState) => state.trainers);
  const trainingTypesList = useSelector(
    (state: RootState) => state.trainingTypes
  ).map((item: TrainingTypesType) => item.trainingType);
  const formattedTrainers = trainersList.map(
    (trainer: TrainersType) => `${trainer.firstName} ${trainer.lastName}`
  );
  const notify = () => toast.success("Training added!");

  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("0");
  const [type, setType] = useState<string>(
    trainingTypesList ? trainingTypesList[0] : ""
  );
  const [description, setDescription] = useState<string>("");
  const [selectedTrainer, setSelectedTrainer] = useState<string>(
    formattedTrainers ? formattedTrainers[0] : ""
  );

  useEffect(() => {
    dispatch(fetchAllTrainers() as any);
    dispatch(fetchAllTrainingTypes() as any);
  }, [dispatch]);

  const handleSubmit = () => {
    let newTraining: TrainingsType = {
      duration,
      trainer: trainersList.filter(
        (trainer: TrainersType) =>
          `${trainer.firstName} ${trainer.lastName}` === selectedTrainer
      )[0].id,
      type,
      date,
      name,
      description,
      student: user.id,
    };
    dispatch(addTrainingOnServer(newTraining) as any);
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
          value={name}
          label="Name"
          onChange={handleInputChange(setName)}
        />
        <Input
          type="date"
          value={date}
          label="Training start date"
          onChange={handleInputChange(setDate)}
        />
        <Input
          type="number"
          value={duration}
          label="Duration"
          onChange={handleInputChange(setDuration)}
        />
        <Input
          type="select"
          value={type}
          label="Type"
          onChange={handleInputChange(setType)}
          options={trainingTypesList}
        />
        <Input
          type="textarea"
          value={description}
          label="Description"
          onChange={handleInputChange(setDescription)}
        />
        <Input
          type="select"
          value={selectedTrainer}
          label="Add trainers"
          onChange={handleInputChange(setSelectedTrainer)}
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
