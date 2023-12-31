"use client";
import Image from "next/image";
import React from "react";
import { atracoes } from "@/data/AtracoesData";
import MainLayout from "@/app/layout/MainLayout";
import BaseDireita from "../../../public/images/logos/Base-Direita-Horizontal.png";
import BaseEsquerda from "../../../public/images/logos/Base-Esquerda-Horizontal.png";
import Logo from "../../../public/images/logos/Marca_Culturarte-Horizontal-Fundo_escuro-.png";
import { SiInstagram, SiYoutube, SiSpotify } from "react-icons/si";
import { BsCalendar3, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { motion } from "framer-motion";

function Page({ params }) {
  const artista = atracoes.find((item) => item.id === params.id);
  console.log(artista);
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="min-h-screen pt-[75px] container mx-auto md:pb-24">
        <div className="w-full justify-center mt-12 mb-10 items-center flex md:max-h-[250px]">
          {/* Logo com tamanho fixo de 250x250 */}
          <div className="md:w-auto md:h-auto w-[250px]">
            <Image
              src={Logo}
              width={250}
              height={250}
              className="mx-auto z-10"
              alt="Logo Culturarte"
            />
          </div>
        </div>
        <div className="">
          {/* Imagem BaseDireita com tamanho fixo de 200x200 */}
          <Image
            src={BaseDireita}
            width={200}
            height={200}
            alt="Design Culturarte"
            className="right-0 top-0 absolute md:mt-[75px] w-[110px] h-[110px] md:w-auto md:h-auto"
          />
        </div>
        <div>
          <Image
            src={BaseEsquerda}
            width={200}
            height={200}
            alt="Design Culturarte"
            className="left-0 top-0 absolute md:mt-[75px] w-[110px] h-[110px] md:w-auto md:h-auto"
          />
        </div>
        <div
          id="Container"
          className="px-2 md:px-10 flex lg:flex-row flex-col text-zinc-100 items-center w-full   justify-center h-full md:pt-[30px] lg:space-x-8 ">
          <div
            id="Textos"
            className="flex flex-col items-center justify-center md:items-start md:justify-start w-full ">
            <div className="hidden text-zinc-100 font-bold md:block  flex-col w-full items-start text-base mt-4">
              <div className="flex mt-1 items-center text-base ml-1">
                <div className="mr-2 flex space-x-1 items-center justify-center">
                  <BsCalendar3 size={12} />
                  <div>{artista.data}</div>
                </div>
                <div className="mr-2 flex space-x-1 items-center justify-center">
                  <BsClock size={12} /> <div>{artista.horario}</div>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <CiLocationOn size={20} /> <div>{artista.lugar}</div>
                </div>
              </div>
            </div>
            <div className="flex-col flex md:items-start items-center justify-end mt-2">
              <div className="text-2xl text-center md:text-left md:text-6xl font-bold text-yellow-500 z-20 w-full mr-2">
                {artista?.nome}
              </div>
              <div className="text-teal-400 text-xl font-semibold">
                ({artista?.estado})
              </div>
            </div>
            <div className="text-md text-zinc-100 text-start mt-2">
              {artista?.release}
            </div>
            <ul className="lg:flex gap-4 mt-4 hidden">
              {artista?.instagram === "" ? null : (
                <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                  <Link href={artista?.instagram}>
                    <SiInstagram size={30} />
                  </Link>
                </li>
              )}

              {artista?.youtube === "" ? null : (
                <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                  {" "}
                  <Link href={artista.youtube}>
                    {" "}
                    <SiYoutube size={30} />
                  </Link>{" "}
                </li>
              )}

              {artista?.spotify === "" ? null : (
                <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                  <Link href={artista?.spotify}>
                    <SiSpotify size={30} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="w-full mx-auto sm:w-1/2 order-first lg:order-last flex flex-col items-center justify-center ">
            <div className="text-zinc-100 font-bold  mb-4 flex justify-between w-full items-center text-xs  md:hidden ">
              <div className="flex items-center justify-center space-x-1">
                <CiLocationOn size={20} /> <div>{artista.lugar}</div>
              </div>
              <div className="flex mt-1 items-center text-base">
                <div className="mr-2 flex space-x-1 items-center justify-center">
                  <BsCalendar3 size={12} />
                  <div>{artista.data}</div>
                </div>
                <div className="mr-2 flex space-x-1 items-center justify-center">
                  <BsClock size={12} /> <div>{artista.horario}</div>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-8 border-l-4 border-l-yellow-500 border-r-4 border-r-red-600 border-t-red-600 border-t-4 border-b-yellow-500 border-b-4 rounded-full">
              <div
                key={artista?.id}
                className="z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden m-1 relative p-8">
                <Image
                  src={artista?.imagem}
                  alt={`Foto de ${artista?.nome}`}
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg absolute top-0 left-0"
                />
              </div>
            </div>

            <ul className="flex gap-4 mt-4 lg:hidden">
              <>
                {artista?.instagram === "" ? null : (
                  <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                    <Link href={artista.instagram}>
                      <SiInstagram size={30} />
                    </Link>
                  </li>
                )}

                {artista?.youtube === "" ? null : (
                  <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                    {" "}
                    <Link href={artista.youtube}>
                      {" "}
                      <SiYoutube size={30} />
                    </Link>{" "}
                  </li>
                )}

                {artista?.spotify === "" ? null : (
                  <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                    <Link href={artista?.spotify}>
                      <SiSpotify size={30} />
                    </Link>
                  </li>
                )}
              </>
            </ul>
          </div>
          <div className="flex items-center w-full justify-between text-sm  md:hidden">
            <div>
              <Link href="/atracoes">
                <div className="px-2 w-auto p-2 mt-8 bg-yellow-500 border-2 border-yellow-500 text-black rounded-full hover:bg-transparent hover:-translate-y-2 hover:text-yellow-500 duration-300 cursor-pointer">
                  {" "}
                  {"<"} Outras Atrações
                </div>
              </Link>
            </div>
            <div>
              <Link href="/programacao">
                <div className=" px-2 p-2 mt-8 bg-purple-600 border-2 border-purple-600 text-black rounded-full hover:bg-transparent hover:-translate-y-2 hover:text-purple-600 duration-300 cursor-pointer">
                  {" "}
                  Programação comepleta {">"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}

export default Page;
