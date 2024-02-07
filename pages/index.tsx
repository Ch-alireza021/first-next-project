import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "./api/hello";


const HomePage = (props: { events: Event[] }) => {
  console.log(props);
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
