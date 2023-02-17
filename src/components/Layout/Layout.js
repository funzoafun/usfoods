import React from "react";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="page-wrap main">{props.children}</div>
    </>
  );
};

export default Layout;
