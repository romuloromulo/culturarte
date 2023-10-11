import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logos/Marca_Culturarte-Horizontal-Fundo_claro-.png";
import { SiInstagram, SiFacebook } from "react-icons/si";

export default function Navbar() {
  const sessões = ["Home", "Sobre", "Atrações", "Programação"];
  const menuLinks = sessões.map((items) => {
    return (
      <Link href={`/${items}`}>
        <li className="text-lg text-zinc-800 ">
          <p className="mx-4 relative hover:text-white group">
            {items}
            <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
          </p>
        </li>
      </Link>
    );
  });
  return (
    <div
      id="NavBar"
      className=" bg-white bg-opacity-80 w-full fixed flex justify-center font-sans">
      <nav className="lg:px-12  max-w-[1200px] w-full lg:px-15 p-1 flex justify-between items-center px-10">
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
            <Link href={`/Sobre`}>
              <li className="text-lg text-zinc-800 ">
                <p className=" relative hover:text-white group">
                  Sobre
                  <span className="absolute left-0 -bottom-1 w-full h-2 bg-teal-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href={`/Atrações`}>
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
    </div>
  );
}
