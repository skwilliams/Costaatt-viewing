import HomeStyles from "../../styles/News.module.scss";
import Image from "next/image";

const NewsTile = ({ title, img, date, desc, time, topic, location }) => {
  return (
    <>
      <div>
        <Image src={img} alt={title} 
        
        />
        <div>
          <h1>{title} </h1>
          <p> {date}</p>
        </div>
      </div>
    </>
  );
};

export default NewsTile;
