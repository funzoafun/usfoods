import React from "react";
import Header from "../Header/Header";
import StickyFooter from "../Footer/Footer";
import SideMenubar from "../Sidebar/SideMenubar";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="page-wrap main">{props.children}</div>
    </>
  );
};

export default Layout;
