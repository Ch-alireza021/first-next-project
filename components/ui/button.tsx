import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface IButton {
  link: string;
  children: ReactNode;
}

const Button: FC<IButton> = ({ link, children }) => {
  return (
    <Link href={link}>
      <span className="btn">{children}</span>
    </Link>
  );
};

export default Button;
