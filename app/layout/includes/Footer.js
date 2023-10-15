import Image from "next/image";
import React from "react";
import FooterP from "../../../public/images/logos/patrocineo-footer.jpeg";

function Footer() {
  return (
    <section id="Footer">
      <div className="relative h-[250px] block  md:h-[500px] w-full ">
        <Image src={FooterP} layout="fill" objectFit="cover" />
      </div>
      Footer
    </section>
  );
}

export default Footer;
