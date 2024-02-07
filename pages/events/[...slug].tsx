import EventList from "@/components/events/event-list";
import ShowDetails from "@/components/events/event-showDetails";
import ResultsTitle from "@/components/events/event-title";
import React, { FC } from "react";
import { Event, getFilteredEvents } from "../api/api";

interface IFilteredEventsPage {
  hasError?: boolean;
  events: Event[];
  year: number;
  month: number;
}

const FilteredEventsPage: FC<IFilteredEventsPage> = (props) => {
  
  const allEventsPath = "/events";
  if (props.hasError) {
    return <ShowDetails link={allEventsPath}> Invalid filter </ShowDetails>;
  }

  const date = new Date(props.year, props.month - 1);

  return (
    <div className="flex flex-col items-center">
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </div>
  );
};

export const getServerSideProps = async (context: {
  params: { slug: string[] };
}) => {
  const { params } = context;
  const filterData = params.slug;
  const year = +filterData[0];
  const month = +filterData[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2022 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },

      // go to 404 page
      // notFound:true,

      // redirect to custom 404 page
      // redirect:{
      //   destination:"error"
      // }
    };
  }
  const filterEvents = await getFilteredEvents({ year, month });
  return {
    props: {
      events: filterEvents,
      year,
      month,
    },
  };
};

export default FilteredEventsPage;
