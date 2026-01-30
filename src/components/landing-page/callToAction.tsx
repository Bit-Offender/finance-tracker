"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const CallToAction = () => {
  const { isSignedIn } = useUser();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="px-4 sm:px-6 lg:px-8 my-12 sm:my-16"
    >
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 items-center justify-center bg-gradient-to-br min-h-[350px] sm:min-h-[423px] rounded-2xl sm:rounded-3xl from-[#439A86] to-[#2E4482] p-6 sm:p-10 md:p-16">
        <h1 className="font-bold tracking-wider text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight">
          Start Tracking Smarter Today
        </h1>
        <p
          className={`${roboto.className} text-center max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl px-2`}
        >
          Take control of your finances with a clean, simple dashboard built for
          clarity.
        </p>
        {isSignedIn ? (
          <Link href="/dashboard">
            <Button className="rounded-full text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:bg-white hover:text-black">
              Go to dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/sign-up">
            <Button className="rounded-full text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:bg-white hover:text-black">
              GET STARTED
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default CallToAction;
