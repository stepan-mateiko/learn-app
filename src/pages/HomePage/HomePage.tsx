import RoutePaths from "../../constants/routes";
import axios from "axios";
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
import { RootState } from "../../store";

const HomePage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const specializations = useSelector(
    (state: RootState) => state.specializations
  );
  const dispatch = useDispatch();
  console.log(specializations);

  const getData = async () => {
    try {
      const data1 = (await axios.get("http://localhost:3080/api/users")).data;
      console.log(data1.users);
      const data2 = (await axios.get("http://localhost:3080/api/trainers"))
        .data;
      console.log(data2.trainers);
      const data3 = (await axios.get("http://localhost:3080/api/students"))
        .data;
      console.log(data3.students);
    } catch (error) {
      console.log(error);
    }
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

  return (
    <div>
      <button onClick={() => dispatch(fetchAllSpecializations() as any)}>
        Test
      </button>
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
