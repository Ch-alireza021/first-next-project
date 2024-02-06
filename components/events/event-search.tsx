import React, { FC, FormEvent, useRef } from "react";
import Button from "../ui/button";

interface IEventSearch {
  onSearch: (
    selectedYear: string | undefined,
    selectedMonth: string | undefined
  ) => void;
}

const EventSearch: FC<IEventSearch> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement | null>(null);
  const monthInputRef = useRef<HTMLSelectElement | null>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    onSearch(selectedYear, selectedMonth);
  };
  const mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex justify-center items-center pt-10">
      <form
        onSubmit={submitHandler}
        className="mx-8 my-auto p-4 bg-white border rounded-md w-11/12 max-w-[40rem] flex justify-between flex-col gap-4 md:flex-row"
      >
        <div className="w-full flex gap-4 flex-col md:w-[50%] md:flex-row ">
          <div className="control">
            <label htmlFor="year" className="font-bold">
              Year
            </label>
            <select name="year" id="year" className="select" ref={yearInputRef}>
              <option value={"2021"}>2021</option>
              <option value={"2022"}>2022</option>
            </select>
          </div>
          <div className="control">
            <label htmlFor="month">Month</label>
            <select
              name="month"
              id="month"
              className="select"
              ref={monthInputRef}
            >
              {mL.map((mon, index) => (
                <option id={mon} key={mon} value={index + 1}>
                  {mon}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
    </div>
  );
};

export default EventSearch;
