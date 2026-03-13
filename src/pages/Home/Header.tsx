"use client";

import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });

const BANNER_URL = "https://vinbobtel.com/wp-content/uploads/2024/08/banner-vin-1.jpg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center">

      {/* Fade-in-from-below keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      {/* Full background image */}
      <Image
        src={BANNER_URL}
        alt="Vinbob Telecoms hero background"
        fill
        className="object-cover"
        style={{ objectPosition: "center" }}
        priority
      />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-48 sm:pb-32 md:pt-60 md:pb-48 flex items-center">
        <div className="w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[55%]">
          <h1
            className={`${nunitoSans.className} animate-fade-in-up text-[28px] sm:text-[48px] lg:text-[65px] font-[800] leading-[1.15] sm:leading-[1.25] text-[#0D0D0D] mb-7 sm:mb-10`}
            style={{ animationDelay: "0.1s" }}
          >
            Delivering the highest quality, cost effective Voice and SMS.
          </h1>

          <p
            className="animate-fade-in-up text-[15px] sm:text-[19px] text-[#1f2937] mb-8 sm:mb-14 font-normal leading-[1.5] sm:leading-normal"
            style={{ animationDelay: "0.35s" }}
          >
            We empower communications in the digital age
          </p>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row flex-wrap gap-5 items-start sm:items-center"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-w-[160px] px-10 py-4 text-[14px] sm:text-[13px] font-bold text-white transition-all duration-200 hover:opacity-90 rounded-[5px]"
              style={{ backgroundColor: "#8236fd" }}
            >
              LEARN MORE
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center min-w-[200px] px-8 py-4 text-[14px] sm:text-[13px] font-bold bg-transparent transition-all duration-200 hover:bg-red-50 rounded-[5px]"
              style={{ color: "#d92d20", border: "1.5px solid #d92d20" }}
            >
              SEE OUR SOLUTIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}