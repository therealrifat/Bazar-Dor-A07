import type { Metadata } from "next";
import { Baloo_Da_2 } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import FooterSection from "./component/Footer";

const balodatwo = Baloo_Da_2({
  subsets: ["latin", "bengali"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "BAZAR-DOR",
  description: "আজকের বাজারের দাম এক নজরে",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${balodatwo.className} min-h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0f5f0]">
        <Navbar />
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
