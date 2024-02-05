import NewsCard from "../../components/PageComponents/NewsCard";
import ProgStyles from "../../styles/Programmes.module.scss";
import Link from "next/link";
import standardStyles from "../../styles/main.module.scss";

const NewsRow = ({ label, news }) => {
  return (
    <>
      <h2
        className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
      >
        {label} <span> NEWS</span>
      </h2>
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
      <div className={ProgStyles.goto}>
        <Link className={ProgStyles.goto} href="/news">
          View More...
        </Link>
      </div>
    </>
  );
};

export default NewsRow;
