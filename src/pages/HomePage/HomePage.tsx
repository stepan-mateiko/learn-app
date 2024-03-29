import { useSelector } from "react-redux";

import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";

import RoutePaths from "../../constants/routes";
import { articles } from "../../constants/articles";

import homeImg from "../../assets/images/home-img.png";

import { RootState } from "../../store";

const HomePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const renderWelcomeSection = () => {
    return (
      <div className="home__welcome">
        {!user.firstName && <h1>Let's start learning</h1>}
        {user.firstName && <h1>{`Hi, ${user.firstName}`}</h1>}
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
      <div className="home__join">
        <h2>Join Us</h2>
        <p>
          Qui ut exercitation officia proident enim non tempor tempor ipsum ex
          nulla ea adipisicing sit consequat enim elit cupidatat o
        </p>
        <Button
          buttonText="Join Us"
          isLink={true}
          path={RoutePaths.JOIN_US}
          classOfBtn="home__join-"
        />
      </div>
    );
  };

  const renderWhatsNewSection = () => {
    return (
      <div className="home__new">
        <h2>What's new?</h2>
        <p className="home__new-tag">
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <div className="home__new-wrapper">
          {articles.map((item, index) => (
            <Box
              key={index}
              imgSrc={item.imgSrc}
              tag={item.tag}
              title={item.title}
              date={item.date}
              time={item.time}
            />
          ))}
        </div>
        <Button buttonText="Read more articles" classOfBtn="home__new-" />
      </div>
    );
  };

  return (
    <div className="home">
      {renderWelcomeSection()}
      {!user.firstName && (
        <div className="home__image">
          <img src={homeImg} alt="home" />
        </div>
      )}
      {!user.firstName && renderJoinUsSection()}
      {user.firstName && renderWhatsNewSection()}
    </div>
  );
};

export default HomePage;
