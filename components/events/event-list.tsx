import React, { FC } from "react";
import EventItem from "./event-item";
import { IEventItem } from "./event-item";

const EventList: FC<any> = ({ items }) => {
  return (
    <ul className="list">
      {items.map((ev: IEventItem) => (
        <EventItem
          key={ev.id}
          id={ev.id}
          title={ev.title}
          image={ev.image}
          date={ev.date}
          location={ev.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
