import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
