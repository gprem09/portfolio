// import Image from "next/image";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Project />
    </>
  );
}
