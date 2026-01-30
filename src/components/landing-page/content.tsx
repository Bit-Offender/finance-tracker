"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-20 sm:mt-28 lg:mt-36 text-center border-b-2 border-white/15 pb-5 sm:pb-7">
          We Provide
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center md:justify-around mt-16 sm:mt-20 lg:mt-32">
          <div className="flex items-center justify-center w-full md:w-auto">
            <Image
              src={"/ContentPhone.svg"}
              alt="Content Phone"
              width={320}
              height={320}
              className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-2xl px-4 md:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 lg:mb-8 font-semibold text-center md:text-left">
              Smart AI Insights
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-center md:text-left leading-relaxed">
              Get personalized financial advice powered by intelligent analysis.
              Your AI assistant automatically categorizes expenses, detects
              unusual spending, and highlights trends you might miss — helping
              you make better decisions without any effort.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-10 items-center justify-center md:justify-around mt-16 sm:mt-20 lg:mt-32">
          <div className="w-full md:w-1/2 max-w-2xl px-4 md:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 lg:mb-8 font-semibold text-center md:text-left">
              All Your Finances, Organized
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-center md:text-left leading-relaxed">
              See everything in one clean dashboard. Track expenses, budgets,
              savings, and goals with beautiful visualizations that make your
              financial life simple and stress-free. No spreadsheets, no clutter
              — just clarity
            </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <Image
              src={"/ContentOrganize.svg"}
              alt="Content Organize"
              width={384}
              height={384}
              className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
