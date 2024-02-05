import React, { FC, Fragment, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <main></main>
    </Fragment>
  );
};

export default Layout;
