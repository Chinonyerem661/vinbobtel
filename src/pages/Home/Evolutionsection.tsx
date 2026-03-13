import Image from "next/image";
import Link from "next/link";

export default function EvolutionSection() {
  return (
    <section className="py-14 sm:py-20 bg-white mb-8">
      <div className="max-w-[1340px] mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">

          {/* ── Left: Image (Above text on mobile) ── */}
          <div className="w-full lg:w-1/2 flex-shrink-0 order-1 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: "16/10" }}>
              <Image
                src="https://vinbobtel.com/wp-content/uploads/2024/08/sms.jpg"
                alt="Global SMS and voice connectivity"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <h2 className="text-[32px] sm:text-4xl font-[800] text-[#0a1f3c] leading-[1.15] mb-8 sm:mb-6 max-w-[420px] sm:max-w-none">
              Continuous evolution and development
            </h2>

            <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-8 font-bold">
              Our emphasis in technology and process automation has allowed Vinbobtel to
              remain as one of the leader voice carriers, with global connectivity and limitless
              adaptation to the different challenges of the ever-changing voice markets.
            </p>

            {/* Our Vision */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                {/* Thin checkmark circle icon (Standardized) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path
                    d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.56.94 6.18 2.47"
                    stroke="#466270"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 11l3 3L22 4"
                    stroke="#466270"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[17px] sm:text-lg font-bold text-[#0a1f3c]">Our Vision</span>
              </div>
              <p className="text-[14.5px] sm:text-base text-gray-600 leading-relaxed pl-8 font-bold">
                To be the international gateway of choice for voice and data traffic
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:opacity-90 rounded-[5px]"
              style={{ backgroundColor: "#8236fd" }}
            >
              ABOUT US →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}