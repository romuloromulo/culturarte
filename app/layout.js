import "./globals.css";
import { Syne } from "next/font/google";

const inter = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Culturarte Maranhão",
  description:
    "Festival de cultura popular, música, culinária, artes visuais, artesanato e literatura maranhense!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
