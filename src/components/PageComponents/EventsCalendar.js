import eventsData from "./eventsdata";
import calendar from "../../../public/images/homepage/calendar-icon.png";
import Image from "next/image";
import eventsStyles from "../../styles/EventsCalendar.module.scss";
import location from "../../../public/images/servicesPhoto/location.svg";
import time from "../../../public/images/homepage/time.svg";

const EventsCalendar = () => {
  return (
    <div className={eventsStyles.event_calendar}>
      <div className={eventsStyles.row}>
        {eventsData.map((event, index) => (
          <>
            <div className={eventsStyles.col1of3}>
              <div className={eventsStyles.event} key={index}>
                <div className={eventsStyles.date}>
                  {/* Separate elements for day and month */}
                  <span className={eventsStyles.month}>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </span>

                  <span className={eventsStyles.day}>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className={eventsStyles.details}>
                  <div className={eventsStyles.name}>{event.name}</div>
                  <div className={eventsStyles.time}>
                    <Image
                      className={eventsStyles.img}
                      src={time}
                      alt="picture of clock "
                      width="15"
                    />
                    {event.time}
                  </div>

                  <div className={eventsStyles.location}>
                    <Image
                      className={eventsStyles.img}
                      src={location}
                      alt="picture of location icon "
                      width="15"
                    />

                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
