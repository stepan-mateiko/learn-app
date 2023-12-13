import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import boxImg1 from "../../assets/images/box-img-1.png";
import boxImg2 from "../../assets/images/box-img-2.png";
import boxImg3 from "../../assets/images/box-img-3.png";
const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        {" "}
        <h1>Hi, Username</h1>
        <p>
          Welcome to Learn Platform - where every day is a day to learn. Dive
          into the vast ocean of knowledge and empower yourself with the tools
          for a successful tomorrow. Happy learning!
        </p>
      </div>
      <div>
        <h2>What's new?</h2>
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <div style={{ display: "flex" }}>
          <Box
            imgSrc={boxImg1}
            tag="Do consectetur"
            title="Aliqua Irure Tempor Lorem Occaecat Volup"
            date="Dec 24, 2022"
            time="5"
          />
          <Box
            imgSrc={boxImg2}
            tag="Consequat labore"
            title="Commodo Deserunt Ipsum Occaecat Qui"
            date="Dec 12, 2022"
            time="10"
          />
          <Box
            imgSrc={boxImg3}
            tag="Laboris nulla"
            title="Deserunt Cccaecat Qui Amet Tempor Dolore"
            date="Nov 20, 2022"
            time="3"
          />
        </div>
        <Button buttonText="Read more articles" />
      </div>
    </div>
  );
};

export default HomePage;
