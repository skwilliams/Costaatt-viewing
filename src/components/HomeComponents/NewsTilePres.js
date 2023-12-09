import Home from "@/pages";
import HomeStyles from "../../styles/News.module.scss";
import Image from "next/image";

const NewsTilePres = ({ title, img, date, desc, time, topic, location }) => {
  return (
    <>
      <div className={HomeStyles.newscard}>
        <p className={HomeStyles.newsdate}> {date}</p>

        <div className={HomeStyles.image}>
          <Image src={img} alt={title} />
          <div>
            <h1 className={HomeStyles.newstitle}>{title} </h1>
            <p className={HomeStyles.newsdesc}> {desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTilePres;
