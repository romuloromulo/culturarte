import Header from "./layout/includes/Header";
import Sobre from "./layout/includes/Sobre";
import MainLayout from "./layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="">
        <Header />
        <Sobre />
      </main>
    </MainLayout>
  );
}
