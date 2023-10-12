import React from "react";
import MainLayout from "../layout/MainLayout";
import Image from "next/image";
import BaseDireita from "../../public/images/logos/Base-Direita-Horizontal.png";
import BaseEsquerda from "../../public/images/logos/Base-Esquerda-Horizontal.png";
import { atracoes } from "@/data/AtracoesData";

function Atrações() {
  const renderAtraçoes = atracoes.map((item, index) => (
    <div key={index} className="relative z-10">
      <Image src={item.imagem} width={500} height={500} />
    </div>
  ));

  return (
    <MainLayout>
      <div id="Atrações" className="min-h-screen bg-zinc-800 relative">
        <div className="container mx-auto w-full flex items-center justify-center flex-col lg:flex-row px-10 md:mt-[75px]">
          <Image
            src={BaseDireita}
            width={200}
            height={200}
            className="right-0 top-0 absolute"
          />
          <Image
            src={BaseEsquerda}
            width={200}
            height={200}
            className="left-0 top-0 absolute"
          />
          <div className="w-full mt-4 flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="sm:w-[90%] w-[50%] border-b mt-[-1rem] md:mt-0 mb-4 md:mb-0 border-red-400"></div>
            <div className="relative p-12 md:pr-0 ">
              <span className="absolute p-10 md:p-14 rounded-full bg-red-500 top-[25%] left-9 md:top-[15%] z-20"></span>
              <span className="absolute p-6 md:p-8 rounded-full bg-yellow-500 right-[35%] top-[35%] md:right-[15%] z-20"></span>
              <div className="z-30">
                <div className="text-5xl md:text-6xl font-bold font-sans text-white relative z-30">
                  Atrações
                </div>
                <h2 className="text-lg text-white text-center w-full relative z-30">
                  Conheça as atrações dessa edição!
                </h2>
              </div>
            </div>
            <div className="sm:w-[90%] w-[50%] border-b mt-[-1rem] md:mt-0 mb-4 md:mb-0 border-red-400"></div>
          </div>
        </div>
        {renderAtraçoes}
      </div>
    </MainLayout>
  );
}

export default Atrações;
