import React, { FC, ReactNode } from "react";
import Button from "../ui/button";
interface IShowDetails {
  children: ReactNode;
  link?: string;
}

const ShowDetails: FC<IShowDetails> = ({ children, link }) => {
  return (
    <div className="flex justify-center text-4xl pt-8 flex-col items-center gap-5">
      {children}
      {link && <Button styles={"text-base"} link={link}>Show AllEvents</Button>}
    </div>
  );
};

export default ShowDetails;
