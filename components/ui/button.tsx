import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface IButton {
  link: string;
  children: ReactNode;
  onClick:()=>void
}

const Button: FC<IButton> = ({ link, children ,onClick:propsOnClick}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <span className="btn">{children}</span>
        </Link>
      ) : (
        <button  className="btn w-fit" onClick={propsOnClick}> {children}</button>
      )}
    </>
  );
};

export default Button;
