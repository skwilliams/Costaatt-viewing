import EventCard from "@/components/PageComponents/EventCard";
import ProgStyles from "../../styles/Programmes.module.scss";
import { getEventDate, getEventTime } from "../../../public/data/eventsdata";

const EventsRow = ({ events, schoolcolor }) => {
  return (
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
  );
};

export default EventsRow;
