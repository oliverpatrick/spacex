import React, { ReactNode } from "react";
import Header from "./Header/Header";

import "./Layout.scss";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
}

export default Layout;
