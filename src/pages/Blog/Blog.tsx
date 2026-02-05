import { BLOG } from "../../constants/text-constants";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <h2>{BLOG.heading}</h2>
      <div className="blog__wrapper">
        {BLOG.articles.map((item, index) => (
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
      <Button buttonText="Load more articles" classOfBtn="home__new-" />
    </div>
  );
};

export default Blog;
