interface BoxProps {
  imgSrc: string;
  tag: string;
  title: string;
  date: string;
  time: string;
}
const Box: React.FC<BoxProps> = ({ imgSrc, tag, title, date, time }) => {
  return (
    <div>
      <img src={imgSrc} alt={`${title} box img`} />
      <p>{tag}</p>
      <h4>{title}</h4>
      <p>
        <span>{date}</span> <span>{`${time} min to read`}</span>
      </p>
    </div>
  );
};

export default Box;
