import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";
import EventSummery from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content"

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) return <div> No event found </div>;

  return (
    <>
      <EventSummery title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>
            {event.description}
        </p>
      </EventContent>
    </>
  ); 
};

export default EventDetailPage;
