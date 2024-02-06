import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/event-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData)
    return <div className="flex justify-center text-4xl"> LOADING ... </div>;
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
    return <div className="flex justify-center text-4xl"> Invalid filter </div>;
  }
  console.log(filterData);
  const filterEvents = getFilteredEvents({ year, month });
  if (!filterEvents || filterEvents.length === 0) {
    return (
      <div className="flex justify-center text-4xl">
        No events found for the chosen filter
      </div>
    );
  }
  const date=new Date(year,month-1);
  console.log(date);

  return (
    <div className="flex flex-col items-center">
      <ResultsTitle date={date}/>
      <EventList items={filterEvents} />
    </div>
  );
};

export default FilteredEventsPage;
