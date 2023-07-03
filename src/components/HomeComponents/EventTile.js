import HomeStyles from "../../styles/Home.module.scss";
import Image from "next/image";

const EventTile = ({ title, img, date, desc, time, topic, location }) => {
  return (
    <div className={HomeStyles.events}>
      <Image src={img} alt={title} />
      <div>
        <h1>{title} </h1>
        <p> {date}</p>
        <p>{desc}</p>
        <p> {time}</p>
        <p>{topic} </p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default EventTile;
