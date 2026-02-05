import { FEATURES } from "../../constants/text-constants";
import Button from "../../components/Button/Button";

const Features: React.FC = () => {
  return (
    <div className="features">
      <h2>{FEATURES.heading}</h2>
      <h3>{FEATURES.subheading}</h3>
      <p className="features__text">{FEATURES.text}</p>
      <div className="features__wrapper">
        {FEATURES.articles.map((item, index) => (
          <div className="features__box" key={index}>
            <div className="features__box-info">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
              <Button buttonText="Try now" />
            </div>
            <div className="features__box-image">
              <img src={item.image} alt="features" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
