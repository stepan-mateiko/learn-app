import RoutePaths from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";

import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import boxImg1 from "../../assets/images/box-img-1.png";
import boxImg2 from "../../assets/images/box-img-2.png";
import boxImg3 from "../../assets/images/box-img-3.png";
import homeImg from "../../assets/images/home-img.png";

import {
  fetchAllStudents,
  updateStudentOnServer,
} from "../../store/students/thunk";
import {
  fetchAllTrainers,
  updateTrainerOnServer,
} from "../../store/trainers/thunk";
import { fetchAllSpecializations } from "../../store/specializations/thunk";
import { loginUserAsync, updateUserAsync } from "../../store/users/thunk";
import { fetchAllTrainingTypes } from "../../store/trainingTypes/thunk";
import {
  fetchAllTrainings,
  addTrainingOnServer,
} from "../../store/trainings/thunk";
import { RootState } from "../../store";

const HomePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  localStorage.setItem("user", JSON.stringify(user));
  const userStore = useSelector((state: RootState) => state.trainings);
  const dispatch = useDispatch();
  console.log(userStore);

  const test = {
    firstName: "Iryna",
    lastName: "Mateiko",
    email: "ira@gmail.com",
    role: "trainer",
    id: "e2db5979-4a52-4bb3-9bc7-ad13cbb1d956",
    userName: "iryna-mateiko",
    password: "Stark99",
  };

  const test2 = {
    name: "Angular",
    duration: "110",
    date: "2023-07-02",
    student: "29833a19-e909-4e5c-97ff-2ceee8bd476e",
    trainer: "2fa290da-318d-416d-b3b8-a717e081b27d",
    type: "Full course",
    description: "gfgffdfdfffffffff",
    id: "f40ef939-5803-49f2-9481-30684a944ef5",
  };

  const renderWelcomeSection = () => {
    return (
      <div>
        {!user && <h1>Let's start learning</h1>}
        {user && <h1>{`Hi, ${user.firstName}`}</h1>}
        <p>
          Welcome to Learn Platform - where every day is a day to learn. Dive
          into the vast ocean of knowledge and empower yourself with the tools
          for a successful tomorrow. Happy learning!
        </p>
      </div>
    );
  };

  const renderJoinUsSection = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Join Us</h2>
        <p>
          Qui ut exercitation officia proident enim non tempor tempor ipsum ex
          nulla ea adipisicing sit consequat enim elit cupidatat o
        </p>
        <Button buttonText="Join Us" isLink={true} path={RoutePaths.JOIN_US} />
      </div>
    );
  };

  const renderWhatsNewSection = () => {
    return (
      <div>
        <h2>What's new?</h2>
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <div style={{ display: "flex" }}>
          {[boxImg1, boxImg2, boxImg3].map((imgSrc, index) => (
            <Box
              key={index}
              imgSrc={imgSrc}
              tag={`Tag ${index + 1}`}
              title={`Title ${index + 1}`}
              date="Dec 24, 2022"
              time={`${index + 1}`}
            />
          ))}
        </div>
        <Button buttonText="Read more articles" />
      </div>
    );
  };

  const handleTest = () => {
    dispatch(loginUserAsync(test) as any);
    dispatch(fetchAllStudents() as any);
    dispatch(fetchAllTrainers() as any);
    dispatch(fetchAllTrainingTypes() as any);
    dispatch(fetchAllSpecializations() as any);
    dispatch(fetchAllTrainings() as any);
    dispatch(addTrainingOnServer(test2) as any);
  };

  return (
    <div>
      <button onClick={() => handleTest()}>Test</button>
      {renderWelcomeSection()}
      {!user && (
        <div>
          <img src={homeImg} alt="home" />
        </div>
      )}
      {!user && renderJoinUsSection()}
      {user && renderWhatsNewSection()}
    </div>
  );
};

export default HomePage;
