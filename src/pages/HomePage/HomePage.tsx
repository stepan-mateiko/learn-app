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
import { RootState } from "../../store";

const HomePage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch();
  console.log(students);

  const test = {
    firstName: "Ivan",
    lastName: "Snow",
    email: "mywatchbegins@gmail.com",
    dob: "2000-12-21",
    address: "Castle Black",
    trainings: [
      "edfd67f1-e5b8-418c-aa63-eacf32b4f00d",
      "f4c781d0-c84d-4e50-9aaa-aeb9d8d78fbb",
      "9037ce96-246a-4f7f-90ed-4684803acfea",
      "5f0ef939-5803-49f2-9481-30684a944ef5",
      "9edbbcd7-805e-46ea-8534-e779401378d4",
      "d68853b4-595c-4bd6-8459-9c1e5767b798",
      "b88efcc3-1ec5-45a9-be15-11ff77d942ba",
      "2f073742-037b-4613-8c54-0e46eb1f6e4a",
    ],
    trainers: [
      "3c372c23-3c3b-4bcd-9320-9b03f63ab3e3",
      "5d5630a6-d50a-4747-8ca6-74c57d581939",
      "2fa290da-318d-416d-b3b8-a717e081b27d",
      "e2db5979-4a52-4bb3-9bc7-ad13cbb1d956",
      "872fd870-1164-43e2-b0aa-cea0c03f7b9b",
      "1e3176b7-39b9-421e-8c71-1c583ad33bb7",
    ],
    id: "29833a19-e909-4e5c-97ff-2ceee8bd476e",
    isActive: true,
  };
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
      <button
        onClick={() => dispatch(updateStudentOnServer(test.id, test) as any)}
      >
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
