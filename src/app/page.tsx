import Image from "next/image";
import LandingNavbar from "@/components/LandingNavbar";
import CallToAction from "@/components/landing-page/callToAction";
import Hero from "@/components/landing-page/hero";
import Content from "@/components/landing-page/content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-100% bg-gradient-to-b from-[#101628] to-[#161F38] text-white">
        <LandingNavbar />
          <Hero/>
          <Content/>
          <CallToAction/>
        <Footer/>
      </div>
    </>
  );
}
