import React from "react";
import MainLayout from "../layout/MainLayout";

function Programação() {
  return (
    <MainLayout>
      <div id="Programação" className="container mx-auto">
        <div className="w-full flex items-center justify-around lg:px-20 flex-col lg:flex-row md:gap-24 min-h-screen font-sans">
          <div className="relative p-12 pr-0 -z-50">
            <span className="absolute p-14 rounded-full bg-red-500 -z-40 top-[15%] "></span>
            <span className="absolute p-8 rounded-full bg-yellow-500 -z-40 right-[15%] "></span>
            <div className="text-6xl font-bold font-sans">Programação</div>
          </div>
          <div className="w-full border-b border-red-400"></div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Programação;
