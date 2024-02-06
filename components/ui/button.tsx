import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface IButton {
  link?: string;
  children: ReactNode;
  onClick?: () => void;
  styles?: string | undefined;
}

const Button: FC<IButton> = ({
  link,
  children,
  styles,
  onClick: propsOnClick,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <span className={`btn text-inherit ${styles}`}>{children}</span>
        </Link>
      ) : (
        <button className={`btn w-fit  text-inherit ${styles}`} onClick={propsOnClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
