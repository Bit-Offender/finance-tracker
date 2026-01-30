"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-10 items-center justify-center md:justify-around mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-1/2 max-w-2xl flex flex-col items-center md:items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 font-semibold text-center md:text-left leading-tight">
          Take Control Of Your Money, Effortlessly
        </h1>
        <p
          className={`${roboto.className} text-lg sm:text-xl mb-6 sm:mb-8 text-center md:text-left`}
        >
          Your money shouldn&apos;t be confusing. Organize your finances, set
          budgets, and watch your savings grow with clear, interactive visuals.
        </p>
        {isSignedIn ? (
          <Link
            href="/dashboard"
            className="w-full md:w-auto flex justify-center md:justify-start"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 sm:px-10 h-14 sm:h-[61px] text-xl sm:text-2xl font-semibold tracking-widest transition-all duration-300 rounded-full bg-[#439A86] border-0 hover:bg-[#357a6a]"
            >
              Go to dashboard
            </Button>
          </Link>
        ) : (
          <Link
            href="/sign-up"
            className="w-full md:w-auto flex justify-center md:justify-start"
          >
            <Button
              variant="outline"
              className="w-full sm:w-52 h-14 sm:h-[61px] text-xl sm:text-2xl font-semibold tracking-widest transition-all duration-300 rounded-full bg-[#439A86] border-0 hover:bg-[#357a6a]"
            >
              SIGN UP
            </Button>
          </Link>
        )}
      </div>
      <div className="flex items-center justify-center w-full md:w-auto">
        <Image
          src={"/Hero.svg"}
          width={500}
          height={500}
          alt="Hero Image"
          className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
