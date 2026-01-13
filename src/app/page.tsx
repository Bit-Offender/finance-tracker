import Image from "next/image";
import styles from "./page.module.css";
import LandingNavbar from "@/components/landingnavbar";
import CallToAction from "@/components/landing-page/callToAction";
import Hero from "@/components/landing-page/hero";
import Content from "@/components/landing-page/content";
import Footer from "@/components/footer";

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
