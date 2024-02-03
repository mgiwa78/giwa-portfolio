"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import localFont from "next/dist/compiled/@next/font/dist/local";

// const dmSans = localFont({
//   src: "../../public/fonts/DMSans-VariableFont_opsz,wght.ttf",
//   display: "swap",
//   variable: "--font-dmSans"
// });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stack />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
