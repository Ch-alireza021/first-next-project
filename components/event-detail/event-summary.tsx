import { FC } from "react";

interface IEventSummary {
  title: string;
}

const EventSummary: FC<IEventSummary> = ({ title }) => {
  return (
    <section className="w-full h-[30vh] max-h-[30vw] bg-gradient-to-bl from-teal-600 to-cyan-700">
      <h1 className="md:text-[4vw] text-[7vw] text-center text-white pt-[4vh]  ">{title}</h1>
    </section>
  );
};

export default EventSummary;
