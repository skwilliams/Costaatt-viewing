import HomeStyles from "../../styles/Home.module.scss";
import standardStyles from "../../styles/main.module.scss";
import Image from "next/image";

const EventTile = ({ title, img, date, desc, time, topic, location }) => {
  return (
    <div className={`${standardStyles.eventscard} ${ standardStyles.eventscard__colored}`}>
      {/* <Image src={img} alt={title} /> */}
      <div>
        <h1 className={standardStyles.eventscard__heading}>  {title} </h1>
          {/* <p className={standardStyles.eventscard__text}>{topic} </p> */}
          <p className={standardStyles.eventscard__date}>  {date}</p>
        {/* <p>{desc}</p> */}
        <p className={standardStyles.eventscard__time}> {time}</p>
      
        <p className={standardStyles.eventscard__venue}>{location}</p>
      </div>
    </div>
  );
};

export default EventTile;
