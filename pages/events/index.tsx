import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();
  const findEventHandler = (
    year: string | undefined,
    month: string | undefined
  ) => {
    const path=`/events/${year}/${month}`
    router.push(path)
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
