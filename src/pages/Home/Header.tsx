"use client";

import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });

const BANNER_URL = "https://vinbobtel.com/wp-content/uploads/2024/08/banner-vin-1.jpg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[480px] sm:min-h-[700px] h-[70vh] sm:h-[85vh] flex items-center bg-[#e8f4ff]">

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

      {/* Background image container - restricted width on mobile */}
      <div className="absolute inset-y-0 right-0 w-[100%] sm:w-full overflow-hidden">
        <Image
          src={BANNER_URL}
          alt="Vinbob Telecoms hero background"
          fill
          className="object-cover"
          style={{ objectPosition: "center 38%" }}
          priority
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-8 sm:px-6 lg:px-8 pt-4 pb-6 sm:pt-40 sm:pb-24 flex items-center">
        <div className="w-[65%] sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[55%]">
          <h1
            className={`${nunitoSans.className} animate-fade-in-up text-[26px] sm:text-[45px] lg:text-[60px] font-[800] leading-[1.15] sm:leading-[1.2] text-[#0D0D0D] mb-4 sm:mb-8`}
            style={{ animationDelay: "0.1s" }}
          >
            Delivering the highest quality, cost effective Voice and SMS.
          </h1>

          <p
            className="animate-fade-in-up text-[14px] sm:text-[20px] text-[#1f2937] mb-6 sm:mb-14 font-bold leading-[1.5]"
            style={{ animationDelay: "0.35s" }}
          >
            We empower communications in the digital age
          </p>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-w-[150px] px-8 py-3.5 text-[14px] sm:text-[13px] font-bold text-white transition-all duration-200 hover:opacity-90 rounded-[5px]"
              style={{ backgroundColor: "#8236fd" }}
            >
              LEARN MORE
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center min-w-[190px] px-7 py-3.5 text-[14px] sm:text-[14px] font-bold bg-transparent transition-all duration-200 hover:bg-red-100 rounded-[5px]"
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