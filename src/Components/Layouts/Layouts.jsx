import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Share/header";
import Footer from "../../Share/Footer";

const Layouts = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
