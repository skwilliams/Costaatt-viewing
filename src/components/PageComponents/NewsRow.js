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
      {/* <div className={ProgStyles.threeColGrid}>
        <NewsCard
          mainimage={news[0].mainimage}
          title={news[0].title}
          text={news[0].text.substring(0, 150) + "..."}
          link="https:www.google.com"
          schoolcolor={news[0].schoolcolor}
        />
      </div>
      <div className={ProgStyles.threeColGrid}>
        <NewsCard
          mainimage={news[1].mainimage}
          title={news[1].title}
          text={news[1].text.substring(0, 150) + "..."}
          link="https:www.google.com"
          schoolcolor={news[1].schoolcolor}
        />
      </div>
      <div className={ProgStyles.threeColGrid}>
        <NewsCard
          mainimage={news[2].mainimage}
          title={news[2].title}
          text={news[2].text.substring(0, 150) + "..."}
          link="https:www.google.com"
          schoolcolor={news[2].schoolcolor}
        />
      </div>
      <div className={ProgStyles.threeColGrid}>
        <NewsCard
          mainimage={news[3].mainimage}
          title={news[3].title}
          text={news[3].text.substring(0, 150) + "..."}
          link="https:www.google.com"
          schoolcolor={news[3].schoolcolor}
        />
      </div> */}
      {/* {news.map((post) => {
        <p>Testing the NewsRow </p>;
        // <div className={ProgStyles.threeColGrid} key={post.title}>
        //   
        // </div>;
      })} */}
    </div>
  );
};

export default NewsRow;
