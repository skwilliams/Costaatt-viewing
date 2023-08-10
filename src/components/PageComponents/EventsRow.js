import EventCard from "@/components/PageComponents/EventCard";
import ProgStyles from "../../styles/Programmes.module.scss";
import Link from "next/link";
import { getEventDate, getEventTime } from "../../../public/data/eventsdata";

const EventsRow = ({ label, events, schoolcolor }) => {
  console.log(events);

  return (
    <>
      <p className={ProgStyles.headingprimary}>{label} Events</p>
      <div className={ProgStyles.threeColGridCon}>
        {events.map((event, index) => {
          return (
            <div className={ProgStyles.threeColGrid} key={index}>
              <EventCard
                image={event.image}
                date={getEventDate(event)}
                time={getEventTime(event)}
                title={event.title}
                location={event.location}
                link={event.id}
                schoolcolor={schoolcolor}
              />
            </div>
          );
        })}
      </div>
      <div className={ProgStyles.goto}>
        <Link className={ProgStyles.goto} href="#">
          {" "}
          View More..
        </Link>
      </div>
    </>
  );
};

export default EventsRow;
