import Image from "next/image";
import React from "react";
import FooterP from "../../../public/images/logos/patrocineo-footer.jpeg";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../../../public/images/logos/Marca_Culturarte-Horizontal-Fundo_escuro-.png";
import Link from "next/link";

function Footer() {
  return (
    <section id="Footer" className="flex flex-col itesm-center">
      <div id="Imagem" className="w-full ">
        <div className="relative w-full mx-auto md:container bg-gray-400  mb-12">
          <Image src={FooterP} className="object-cover md:object-contain" />
        </div>
      </div>
      <div className="border-t w-full border-zinc-900 my-10" />
      <div
        id="Teste"
        className="container mt-2 px-4 mx-auto text-white text-2xl grid-cols-2  md:grid-cols-3 grid justify-items-center items-center justify-around ">
        <div className="w-auto flex flex-col items-start">
          <div className="md:mb-12">
            <Link href="/">
              <Image src={Logo} width={200} height={200} />{" "}
            </Link>
          </div>
          <div className="text-center text-zinc-100">
            <h1 className="mb-14 mt-4  md:-mt-10 font-semibold text-sm">
              Música <span className="text-red-600">•</span> Culinária{" "}
              <span className="text-orange-500">•</span> Artesanato{" "}
              <span className="text-purple-600">•</span> Artes Visuais{" "}
              <span className="text-yellow-500">•</span> Literatura{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-start jus">
          {" "}
          <div className="text-sm md:text-base mx-auto mb-1">Nos siga!</div>
          <div
            id="MenuEsquerda"
            className="flex items-center center gap-4 text-black">
            <Link
              href="https://www.instagram.com/culturarte_maranhao/"
              target="_blank">
              <div className="bg-red-600 border-2 border-red-600  rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300  hover:text-white ease-out">
                <SiInstagram size={22} />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/culturarte_maranhao/"
              target="_blank">
              <div className="bg-yellow-400 border-2 border-yellow-400  rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%] hover:text-white  duration-300 ease-out">
                <SiFacebook size={22} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div>Contato:</div>{" "}
          <div className="ml-2 hover:text-yellow-500 duration-300">
            <Link href="mailto:tutucaviana@yahoo.com.br">
              <AiOutlineMail size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t w-full border-zinc-900 my-10" />
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-zinc-100 text-sm md:text-base ">
        <div>
          Site desenvolvido por{" "}
          <Link
            href="https://portfolio-romulo.vercel.app/"
            className="hover:text-red-500 font-semibold duration-300 underline"
            target="_blank">
            Rômulo Viana
          </Link>
        </div>
        © Culturarte Maranhão.
      </div>
    </section>
  );
}

export default Footer;
