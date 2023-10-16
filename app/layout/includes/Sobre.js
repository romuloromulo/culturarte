"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Sobre() {
  const typeText = (
    <Typewriter
      options={{ autoStart: true, loop: true, cursor: "" }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Culturarte")
          .pauseFor(1500)
          .deleteChars(3)
          .pauseFor(1500)
          .deleteAll()
          .typeString("Arte")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Música")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Culinária")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Artesanato ")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Artes Visuais")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Literatura")
          .pauseFor(1500)
          .start();
      }}
    />
  );
  return (
    <section
      id="Sobre"
      className="w-full flex flex-col min-h-screen text-zinc-100  ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}>
        <div className="container mx-auto min-h-screen border-t border-zinc-800 py-8">
          <div className="w-full md:mt-[55px]  flex md:flex-row flex-col justify-center items-start h-full px-4 md:px-8">
            <div className="w-full md:w-1/2 mb-8 ">
              <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
                <div className="flex flex-col w-full  items-center md:items-start justify-start ">
                  <h2 className="mr-4">Sobre</h2>
                  <h1 className="text-5xl md:text-6xl font-bold mr-2 whitespace-nowrap">
                    {typeText}
                  </h1>
                </div>
                <div className="w-[50%] md:w-[95%] border-t  border-red-400"></div>
              </div>
              <div>
                <p className="text-base  md:text-md  md:text-lg font-sans">
                  Música. Culinária. Artesanato. Artes Visuais e Literatura. Do
                  jeito que a gente gosta, em um espaço aberto, totalmente
                  gratuito, potencializando a Economia Criativa local, recebendo
                  expressões do universo instrumental do país, junto de
                  manifestações da Cultura Popular Maranhense, em especial,
                  bumba-meu-boi e tambor de crioula. Essa é tônica do
                  Culturarte, festival que estreia este ano. A realização é da
                  Tutuca Viana Produções, através da Lei Federal de Incentivo à
                  Cultura, Ministério da Cultura, com patrocínio do Instituto
                  Vale. Esse período foi escolhido para aquecer a baixa
                  temporada turística, possibilitando a visitantes, turistas e
                  população tanto de Barreirinhas quanto de São Luís, o
                  conhecimento e apreciação das belezas naturais únicas, dos
                  sabores, dos artistas, do folclore regional e da cultura
                  envolvendo toda a cadeia produtiva da região. Além dos shows,
                  exposição, recital poético, haverá, no Culturarte, barracas
                  padronizadas para comercialização do artesanato e degustação
                  da culinária típica e também a realização de palestras
                  voltadas aos alunos das escolas públicas federais, estaduais
                  ou municipais.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="lg:w-[500px] h-auto border-4 rounded-xl overflow-hidden border-transparent mx-auto">
                <video autoPlay loop muted>
                  <source src="/images/Culturarte.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-purple-500 bg-opacity-50 p-4 md:p-6 my-8 shadow-md shadow-zinc-800 ">
          <ul className="flex space-x-2  md:space-x-6 lg:space-x-8 items-center justify-center text-sm md:text-lg lg:text-xl mx-auto md:font-bold container">
            <li>ARTESANATO</li>
            <li>EXPOSIÇÕES</li>
            <li>COMIDA TÍPICA</li>
            <li>PALESTRAS</li>
            <li>SHOWS</li>
          </ul>{" "}
        </div>
      </motion.div>
    </section>
  );
}

export default Sobre;
