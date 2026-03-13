import Image from "next/image";
import Link from "next/link";

export default function EvolutionSection() {
  return (
    <section className="py-20 px-6 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left: Image ── */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://vinbobtel.com/wp-content/uploads/2024/08/sms.jpg"
                alt="Global SMS and voice connectivity"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">
              Continuous evolution and development
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Our emphasis in technology and process automation has allowed Vinbobtel to
              remain as one of the leader voice carriers, with global connectivity and limitless
              adaptation to the different challenges of the ever-changing voice markets.
            </p>

            {/* Our Vision */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                {/* Checkmark circle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#6d28d9"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-black text-gray-900">Our Vision</span>
              </div>
              <p className="text-base text-gray-500 leading-relaxed pl-7">
                To be the international gateway of choice for voice and data traffic
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: "#6d28d9" }}
            >
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}