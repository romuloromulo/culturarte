"use client";
import Image from "next/image";
import React from "react";
import { atracoes } from "@/data/AtracoesData";
import MainLayout from "@/app/layout/MainLayout";
import BaseDireita from "../../../public/images/logos/Base-Direita-Horizontal.png";
import BaseEsquerda from "../../../public/images/logos/Base-Esquerda-Horizontal.png";
import Logo from "../../../public/images/logos/Marca_Culturarte-Horizontal-Fundo_escuro-.png";
import { SiInstagram, SiYoutube, SiSpotify } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

function Page({ params }) {
  const artista = atracoes.find((item) => item.id === params.id);
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="min-h-screen pt-[75px] container mx-auto pb-24">
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
          className="px-5 md:px-10 flex md:flex-row flex-col text-zinc-100 items-start gap-8 justify-center h-full">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start w-full md:translate-y-[25%]">
            <div className="text-3xl text-center md:text-left md:text-6xl font-bold text-yellow-500 z-20 w-full">
              {artista?.nome}
            </div>
            <div className="text-teal-400 text-xl font-semibold">
              {artista?.estado}
            </div>
            <div className="text-md text-zinc-100 text-start mt-4">
              {artista?.release}
            </div>
            <ul className="md:flex gap-4 mt-4 hidden">
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
          <div className="w-auto mx-auto md:w-1/2 order-first md:order-last flex flex-col items-center">
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
            <ul className="flex gap-4 mt-4 md:hidden">
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
        </div>
      </motion.div>
    </MainLayout>
  );
}

export default Page;
