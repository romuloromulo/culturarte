import React from "react";
import Navbar from "./includes/Navbar";
import "../../app/globals.css";
import Footer from "./includes/Footer";

function MainLayout({ children }) {
  return (
    <>
      <div id="MainLayout" className="bg-black">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
