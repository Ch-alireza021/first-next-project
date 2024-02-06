import React, { FC, ReactNode } from "react";
interface IShowDetails {
  children: ReactNode;
}

const ShowDetails: FC<IShowDetails> = ({ children }) => {
  return <div className="flex justify-center text-4xl pt-8">{children}</div>;
};

export default ShowDetails;
