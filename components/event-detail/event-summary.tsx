import { FC } from "react";

interface IEventSummary {
  title: string;
}

const EventSummary: FC<IEventSummary> = ({ title }) => {
  return (
    <section className="w-full h-[30vh] bg-gradient-to-bl from-teal-600 to-cyan-700">
      <h1 className="text-[4vw] text-center text-white pt-[4vh]">{title}</h1>
    </section>
  );
};

export default EventSummary;
