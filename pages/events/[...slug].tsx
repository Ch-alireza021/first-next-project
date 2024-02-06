import EventList from "@/components/events/event-list";
import ShowDetails from "@/components/events/event-showDetails";
import ResultsTitle from "@/components/events/event-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  const allEventsPath = "/events";
  if (!filterData) return <ShowDetails>LOADING ...</ShowDetails>;
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
    return <ShowDetails link={allEventsPath}> Invalid filter </ShowDetails>;
  }

  const filterEvents = getFilteredEvents({ year, month });
  if (!filterEvents || filterEvents.length === 0) {
    return (
      <ShowDetails link={allEventsPath}>
        No events found for the chosen filter
      </ShowDetails>
    );
  }
  const date = new Date(year, month - 1);

  return (
    <div className="flex flex-col items-center">
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </div>
  );
};

export default FilteredEventsPage;
