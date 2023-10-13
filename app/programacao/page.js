import React from "react";
import Image from "next/image";
import MainLayout from "../layout/MainLayout";
import { programaçãoBarreirinhas, programaçãoSlz } from "@/data/FestivalData";
import BaseEsquerda from "../../public/images/logos/Base-Esquerda.png";

import { BiDownArrow } from "react-icons/bi";

function Programação() {
  return (
    <MainLayout>
      <div id="Programação" className="min-h-screen">
        <div className="container mx-auto w-full flex items-start justify-between lg:pr-12 flex-col lg:flex-row ">
          <div className="w-full mt-[75px] flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="relative p-12 md:pr-0 -z-50">
              <span className="absolute p-10 md:p-14 rounded-full bg-red-500 -z-40 top-[25%]  md:top-[15%] "></span>
              <span className="absolute p-6 md:p-8 rounded-full bg-yellow-500 -z-40 right-[25%] top-[35%] md:right-[15%] "></span>
              <div className="text-5xl md:text-6xl font-bold font-sans">
                Programação
              </div>
            </div>
            <div className="sm:w-[90%] w-[50%] border-b mt-[-1rem] md:mt-0 mb-4 md:mb-0 border-red-400 "></div>
          </div>
        </div>
        <div
          id="Barreirinhas"
          className=" container mx-auto  w-full flex md:flex-row flex-col  items-center  lg:px-12  mb-8 relative">
          <div className="flex-col md:w-auto w-full flex items-center md:items-start justify-center md:justify-start border-white md:border-r md:border-red-300 md:pr-12">
            <h1 className="text-5xl font-semibold font-sans text-zinc-800">
              Barreirinhas
            </h1>
            <p className="text-md sm:text-lg font-semibold">
              2 a 4 de Novembro, <br className="hidden md:block" />
              Praça da Matriz
            </p>
            <p className="text-zinc-800 md:hidden mt-4">
              <BiDownArrow size={22} />
            </p>
          </div>
          <div className="w-full flex flex-col p-8  mx-4 rounded-xl text-zinc-800 shadow-md ">
            <div>
              <ul>
                {programaçãoBarreirinhas.map((dia) => (
                  <li key={dia.diaSemana}>
                    <div className="flex items-center w-full gap-2 mb-2">
                      <h1
                        className="text-xl md:text-4xl font-bold"
                        style={{ whiteSpace: "nowrap" }}>
                        {" "}
                        {dia.diaSemana}
                      </h1>{" "}
                      <div className="border-b-2 border-purple-200 w-full" />
                    </div>
                    <ul className="ml-1 md:ml-2 mb-6">
                      {dia.eventos.map((evento) => (
                        <li key={evento.titulo} className="font-semibold mb-4">
                          {evento.hora} - {evento.titulo}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image
          src={BaseEsquerda}
          width={200}
          height={200}
          className="left-0 botton-0 mt-[-15%] hidden md:block"
        />
        <div id="São Luís" className="w-full bg-zinc-800 relative">
          <div className="container mx-auto  flex md:flex-row flex-col  items-center  lg:px-12 text-white py-20 ">
            <div className="flex-col md:w-auto w-full flex items-center md:items-start justify-center md:justify-start border-white md:border-r md:border-red-300 md:pr-12">
              <h1 className="text-5xl font-semibold font-sans ">São Luís</h1>
              <p className="text-md sm:text-lg font-semibold">
                10 a 12 de Novembro, Convento das Mercês
              </p>
              <p className="text-white md:hidden mt-4">
                <BiDownArrow size={22} />
              </p>
            </div>
            <div className="w-full flex flex-col p-4  mx-4 rounded-xl text-zinc-800 shadow-lg">
              <div>
                <ul>
                  {programaçãoSlz.map((dia) => (
                    <li key={dia.diaSemana}>
                      <div className="flex items-center w-full gap-2 mb-2">
                        <h1
                          className="text-xl text-white md:text-4xl font-bold"
                          style={{ whiteSpace: "nowrap" }}>
                          {" "}
                          {dia.diaSemana}
                        </h1>{" "}
                        <div className="border-b-2 border-yellow-200 w-full" />
                      </div>
                      <ul className="ml-1 md:ml-2 mb-6">
                        {dia.eventos.map((evento) => (
                          <li
                            key={evento.titulo}
                            className="font-semibold mb-4 text-white">
                            {evento.hora} - {evento.titulo}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Image
            src={BaseEsquerda}
            width={200}
            height={200}
            className="left-0 botton-0 mt-[-25%] hidden md:block"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Programação;
