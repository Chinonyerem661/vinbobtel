import Link from "next/link";

const PATTERN_URL = "https://vinbobtel.com/wp-content/uploads/2020/12/pattern.svg";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-12 px-6"
      style={{ backgroundColor: "#e60000" }}
    >
      {/* SVG pattern background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url(${PATTERN_URL})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        <p className="text-xl sm:text-[26px] font-bold text-white text-center sm:text-left">
          Feel free to contact us
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 bg-white text-[15px] font-bold text-[#000] whitespace-nowrap transition-all duration-200 hover:bg-gray-100 hover:shadow-lg rounded-[4px]"
        >
          Contact us Today
        </Link>
      </div>
    </section>
  );
}