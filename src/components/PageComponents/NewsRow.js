import NewsCard from "@/components/PageComponents/NewsCard";
import ProgStyles from "../../styles/Programmes.module.scss";

const NewsRow = ({ news }) => {
  return (
    <div className={ProgStyles.threeColGridCon}>
      {news.map((newsPost, index) => {
        return (
          <div className={ProgStyles.threeColGrid} key={index}>
            <NewsCard
              mainimage={newsPost.mainimage}
              title={newsPost.title}
              text={newsPost.text.substring(0, 150) + "..."}
              link="https:www.google.com"
              schoolcolor={newsPost.schoolcolor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NewsRow;
