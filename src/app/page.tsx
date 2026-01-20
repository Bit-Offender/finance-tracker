import Image from "next/image";
import styles from "./page.module.css";
import LandingNavbar from "@/components/LandingNavbar";
import CallToAction from "@/components/landing-page/CallToAction";
import Hero from "@/components/landing-page/Hero";
import Content from "@/components/landing-page/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#101628] to-[#161F38] text-white">
        <LandingNavbar />
          <Hero/>
          <Content/>
          <CallToAction/>
        <Footer/>
      </div>
    </>
  );
}
