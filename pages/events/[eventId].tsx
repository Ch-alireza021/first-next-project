import React from "react";
import EventSummery from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ShowDetails from "@/components/events/event-showDetails";
import {
  Event,
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "../api/api";
import Head from "next/head";

const EventDetailPage = (props: { selectedEvent: Event | undefined }) => {
  // -------------------------------------
  // data fetching dosent happen in this component and we dont need it
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // -------------------------------------
  const event = props.selectedEvent;
  if (!event) return <ShowDetails>Loading...</ShowDetails>;

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummery title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context: {
  params: { eventId: string };
}) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  console.log(paths);
  return {
    paths: paths,
    fallback: true,
    // fallback: "block",
  };
  revalidate: 30;
};

export default EventDetailPage;
