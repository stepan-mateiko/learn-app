import { ABOUT_US } from "../../constants/text-constants";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h2>{ABOUT_US.heading}</h2>
      <p className="about-us__text">{ABOUT_US.text}</p>
      <div className="about-us__img">
        <img src={ABOUT_US.image} alt="about us" />
      </div>
      <div className="about-us__wrapper">
        <div className="about-us__team-header">
          <h4>{ABOUT_US.team.heading}</h4>
          <p>{ABOUT_US.team.text}</p>
        </div>
        {ABOUT_US.team.members.map((item) => (
          <div className="about-us__team-card" key={item.name}>
            <img src={item.image} alt="team card" />
            <h5>{item.name}</h5>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
