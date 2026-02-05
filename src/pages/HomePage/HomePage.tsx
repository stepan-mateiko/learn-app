import { useSelector } from "react-redux";

import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";

import RoutePaths from "../../constants/routes";

import homeImg from "../../assets/images/home-img.png";

import { RootState } from "../../store";
import { HOME_PAGE } from "../../constants/text-constants";

const HomePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const renderWelcomeSection = () => {
    return (
      <div className="home__welcome">
        {!user.firstName && <h1>{HOME_PAGE.welcome.heading}</h1>}
        {user.firstName && <h1>{`Hi, ${user.firstName}`}</h1>}
        <p>{HOME_PAGE.welcome.text}</p>
      </div>
    );
  };

  const renderJoinUsSection = () => {
    return (
      <div className="home__join">
        <h2>{HOME_PAGE.joinUs.heading}</h2>
        <p>{HOME_PAGE.joinUs.text}</p>
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
        <h2>{HOME_PAGE.whatsNew.heading}</h2>
        <p className="home__new-tag">{HOME_PAGE.whatsNew.text}</p>
        <div className="home__new-wrapper">
          {HOME_PAGE.articles.map((item, index) => (
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
