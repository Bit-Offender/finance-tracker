import React from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className="bg-black/65 pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold mb-3 sm:mb-2 text-lg sm:text-xl">
            Explore
          </h1>
          <ul className="list-disc list-outside space-y-1 text-center sm:text-left">
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Features
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Templates
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Blog
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                API
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-semibold mb-3 sm:mb-2 text-lg sm:text-xl">
            Support
          </h1>
          <ul className="list-disc list-outside space-y-1 text-center sm:text-left">
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Help Center
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Email Support
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Report Issue
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-semibold mb-3 sm:mb-2 text-lg sm:text-xl">
            Legal
          </h1>
          <ul className="list-disc list-outside space-y-1 text-center sm:text-left">
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Privacy Policy
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Terms
              </li>
            </Link>
            <Link href="/" className="hover:text-[#439A86] transition-colors">
              <li className={`${roboto.className} text-sm sm:text-base`}>
                Data Handling
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-8 sm:mt-10 pb-3 sm:pb-2">
        <h2 className="text-xl sm:text-2xl font-medium tracking-wider">
          &copy; 2025 FinTrack
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
