import { useRouter } from "next/router";

const EventDetail = (props) => {
  const params = useRouter.query;
  return <div>EventPage for {params}</div>;
};

export default EventDetail;
