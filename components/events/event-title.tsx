import { FC } from "react";
import Button from "../ui/button";
interface IResultsTitle{
    date:Date
}

const ResultsTitle:FC<IResultsTitle>=({date})=> {

  const showDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="mx-8 w-[90%] max-w-[40rem] text-center flex flex-col gap-4">
      <h1>Events in {showDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
