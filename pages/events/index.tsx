import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getAllEvents } from "../api/api";
import Head from "next/head";

const AllEventsPage = (props: { events: Event[] }) => {
  const router = useRouter();
  const events = props.events;
  const findEventHandler = (
    year: string | undefined,
    month: string | undefined
  ) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <Fragment>
       <Head>
        <title>
          All Event
        </title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: { events },
    revalidate: 60,
  };
};

export default AllEventsPage;
