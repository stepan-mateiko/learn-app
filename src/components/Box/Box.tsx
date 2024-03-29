import { BoxProps } from "../../constants/props";

const Box: React.FC<BoxProps> = ({ imgSrc, tag, title, date, time }) => {
  return (
    <div className="box">
      <img src={imgSrc} alt={`${title} box img`} />
      <p className="box__tag">{tag}</p>
      <h4>{title}</h4>
      <p className="box__info">
        <span>{date}</span> <span>{`${time} min to read`}</span>
      </p>
    </div>
  );
};

export default Box;
