import { DefaultSeo } from "next-seo";
import Header from "./layout/includes/Header";
import Sobre from "./layout/includes/Sobre";
import MainLayout from "./layout/MainLayout";

export default function Home() {
  return (
    <>
      <DefaultSeo
        title="Culturarte Maranhão"
        description="Festival de cultura popular, música, culinária, artes visuais, artesanato e literatura maranhense!"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "culturartemaranhao.com/",
          site_name: "Culturarte",
        }}
        instagram={{
          handle: "@culturarte_maranhao",
          site: "@culturarte_maranhao",
          url: "instagram.com/culturarte_maranhao/",
        }}
      />
      <MainLayout>
        <main className="">
          <Header />
          <Sobre />
        </main>
      </MainLayout>
    </>
  );
}
