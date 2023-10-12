import React from "react";
import Navbar from "./includes/Navbar";
import "../../app/globals.css";

function MainLayout({ children }) {
  return (
    <>
      <div id="MainLayout">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default MainLayout;
