import Home from "../../pages";
import HomeStyles from "../../styles/News.module.scss";
import Image from "next/image";

const NewsTile = ({ title, img, date, desc, time, topic, location }) => {
  return (
    <>
      <div className={HomeStyles.newscard} >
        <Image src={img} alt={title} />
        <div>
          <h1 className={HomeStyles.newstitle}>{title} </h1>
          <p className={HomeStyles.newsdate}> {date}</p>
        </div>
      </div>
    </>
  );
};

export default NewsTile;
