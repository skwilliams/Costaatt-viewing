import EventCard from "@/components/PageComponents/EventCard";
import ProgStyles from "../../styles/Programmes.module.scss";
import Link from "next/link";
import standardStyles from "../../styles/main.module.scss";

import { getEventDate, getEventTime } from "../../../public/data/eventsdata";

const EventsRow = ({ label, events, schoolcolor }) => {
  console.log(events);

  return (
    <>
      <h2 className={`${standardStyles.newsHeading} ${standardStyles.centertext}`} >{label} <span> Events</span></h2>
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
        <Link className={ProgStyles.goto} href="/events">
          {" "}
          View More..
        </Link>
      </div>
    </>
  );
};

export default EventsRow;
