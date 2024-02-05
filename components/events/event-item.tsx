import React, { FC } from "react";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import { FaLongArrowAltRight } from "react-icons/fa";

export interface IEventItem {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

const EventItem: FC<IEventItem> = ({ title, image, date, location, id }) => {
  const showDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  //   -----------------------
  const formatAddress = location.replace(",", "\n");
  return (
    <li className="item">
      <img src={"/" + image} alt="image" />
      <div className="content">
        <div className="summary w-full">
          <div>
            <h2> {title} </h2>
          </div>
          <div className="date font-bold">
            <DateIcon />

            <time> {showDate} </time>
          </div>
          <div className="address">
            <AddressIcon />
            <address> {formatAddress} </address>
          </div>
        </div>
        <Button link={`/events/${id}`}>
          <span>Explore Event</span>
        </Button>
        {/* <Link className="actions btn" href={`/events/${id}`}>Explore Event</Link> */}
      </div>
    </li>
  );
};

export default EventItem;
