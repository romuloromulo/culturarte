"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logos/Marca_Culturarte-Horizontal-Fundo_claro-.png";
import logoNav from "../../../public/images/logos/Marca_Culturarte-Horizontal-Fundo_escuro-.png";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    setOpenNav((prev) => !prev);
  }

  return (
    <div
      id="NavBar"
      className="bg-white bg-opacity-80 z-10 w-full fixed flex md:justify-center md:items-center  top-0">
      <nav className="max-w-[1200px] w-full lg:px-15 p-1  justify-between items-center px-10 hidden  sm:flex">
        <div id="MenuEsquerda">
          <Link href="/">
            <Image src={Logo} width={150} height={35} alt="Logo Culturarte" />
          </Link>
        </div>
        <div id="MenuMeio">
          <ul className="flex justify-center items-center gap-12">
            <Link href="/">
              <li className="text-lg text-zinc-800 ">
                <p className=" relative hover:text-white group">
                  Home
                  <span className="absolute left-0 -bottom-1 w-full h-2 bg-red-600 -z-10 group-hover:h-full group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href="#Sobre">
              <li className="text-lg text-zinc-800 ">
                <p className=" relative hover:text-white group">
                  Sobre
                  <span className="absolute left-0 -bottom-1 w-full h-2 bg-teal-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href={`/atracoes`}>
              <li className="text-lg text-zinc-800 ">
                <p className=" relative hover:text-white group">
                  Atrações
                  <span className="absolute left-0 -bottom-1 w-full h-2 bg-orange-600 -z-10 group-hover:h-full group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href={`/programacao`}>
              <li className="text-lg text-zinc-800 ">
                <p className=" relative hover:text-white group">
                  Programação
                  <span className="absolute left-0 -bottom-1 w-full h-2 bg-purple-600 -z-10 group-hover:h-full group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
          </ul>
        </div>
        <div id="MenuEsquerda" className="flex items-center center gap-4">
          <Link
            href="https://www.instagram.com/culturarte_maranhao/"
            target="_blank">
            <div className="bg-red-600 border-2 border-red-600 hover:bg-transparent rounded-full p-2 hover:bg-white hover:-translate-y-[15%]  duration-300 ease-out">
              <SiInstagram size={22} />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/culturarte_maranhao/"
            target="_blank">
            <div className="bg-yellow-400 border-2 border-yellow-400  rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300 ease-out">
              <SiFacebook size={22} />
            </div>
          </Link>
        </div>
      </nav>

      <nav
        className={` ${
          openNav && "hidden"
        }block sm:hidden bg-zinc-100 bg-opacity-70 shadow-sm p-5 fixed m-2 rounded-full cursor-pointer`}
        onClick={handleNav}>
        <AiOutlineMenu size={22} className="text-black" />
      </nav>
      <div
        className={
          openNav
            ? "fixed left-0 top-0 w-screen sm:hidden h-full bg-zinc-900 border-2 ease-linear duration-500 z-50 text-white"
            : "fixed left-[-100%] top-0 p-10 ease-out duration-500 z-50"
        }
        onClick={handleNav}>
        <Image src={logoNav} width={100} height={100} alt="logo" />
        <ul className="w-full  font-bold text-4xl">
          <Link href="/">
            <li className="bg-red-600 p-8 w-full">
              <p className=" relative hover:text-white group">Home</p>
            </li>
          </Link>
          <Link href="#Sobre">
            <li className="bg-teal-500 p-8 w-full">
              <p className=" relative hover:text-white group">Sobre</p>
            </li>
          </Link>
          <Link href={`/atracoes`}>
            <li className="bg-orange-600  p-8 w-full">
              <p className=" relative hover:text-white group">Atrações</p>
            </li>
          </Link>
          <Link href={`/programacao`}>
            <li className="bg-purple-600 p-8 w-full">
              <p className=" relative hover:text-white group">Programação</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
