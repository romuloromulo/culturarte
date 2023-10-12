"use client";
import { motion } from "framer-motion";
import LogoCulturarte from "../../../public/images/logos/Marca_Culturarte-Vetical-Fundo_claro-.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}>
      <section id="Hero" className="container mx-auto">
        <div className="w-full flex items-center justify-around lg:px-20 flex-col lg:flex-row md:gap-24 h-screen md:min-h-screen ">
          <div className="px-8 md:px-0">
            <Image
              src={LogoCulturarte}
              width={400}
              height={400}
              alt="Logo Festival Culturarte"
              // className="h-[400px] w-[350px] md:h-full md:w-full"
            />
          </div>
          <div className="text-center flex flex-col center mt-6">
            <div className="border-b-2 border-red-300 pb-8">
              <p className="text-zinc-900  text-3xl lg:flex-col lg:flex">
                <span className=" font-semibold md:text-6xl text-red-600 md:font-bold italic font-sans text-4xl ">
                  {" "}
                  Barreirinhas:
                </span>
                <div>
                  <b> 02 a 04 </b>de Novembro
                </div>
                <div className="text-xl mt-1">
                  <span className="font-semibold">Local:</span>{" "}
                  <Link
                    href="https://maps.app.goo.gl/BT7DB95nGz2vNzsg7"
                    target="_blank">
                    <span className="hover:text-red-600 hover:underline font-bold duration-300">
                      Praça da Matriz
                    </span>
                  </Link>
                </div>
              </p>
            </div>
            <div className="mt-8">
              <p className="text-zinc-900  text-3xl lg:flex-col lg:flex">
                <span className=" font-semibold md:text-6xl text-purple-600 md:font-bold italic font-sans text-4xl ">
                  {" "}
                  São Luís:
                </span>
                <div>
                  <b> 10 a 12 </b> de Novembro
                </div>
                <div className="text-xl font-semibold mt-2">
                  <span className="">Local:</span>{" "}
                  <Link
                    href="https://maps.app.goo.gl/a12pcFR1EUSSfjVn6"
                    className="font-bold hover:text-purple-600 hover:underline duration-300 "
                    target="_blank">
                    Convento das Mercês
                  </Link>
                </div>
              </p>
              <div className="w-full md:w-auto  h-auto flex justify-center items-center">
                <Link href="/programacao" className="w-full">
                  <div className="bg-yellow-500 border-2 border-yellow-500 hover:bg-transparent hover:text-zinc-900  rounded-lg w-full  sm:w-[12rem] mt-10 py-4 px-8 flex justify-center items-center text-2xl font-bold  text-white text-center duration-300 ease-out hover:-translate-y-[15%]  ">
                    Programação
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full px-4 text-center">
            <h1 className="mb-14 mt-4  md:-mt-10 font-semibold md:text-lg text-md">
              <span> Música</span> • <span>Culinária</span> •<span></span>{" "}
              Artesanato • <span></span>Artes Visuais • <span></span>Literatura
            </h1>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Header;
