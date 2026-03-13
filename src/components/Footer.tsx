// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8 text-center mt-auto mt-16">
//       <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} Vinbob Telecoms. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import Image from "next/image";

// ─── Chevron Right Icon ───────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 flex-shrink-0 mt-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

// ─── Footer Link ──────────────────────────────────────────────────────────────
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-start gap-2.5 text-[14.5px] sm:text-[14px] font-bold text-white hover:text-white transition-colors duration-150"
      >
        <ChevronRight />
        <span>{label}</span>
      </Link>
    </li>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#0b2099ff" }}>
      {/* World map background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://vinbobtel.com/wp-content/uploads/2024/08/bg2.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-14 sm:px-8 pt-12 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="https://vinbobtel.com/wp-content/uploads/2024/08/logo-main-white.png"
              alt="Vinbob Telecoms"
              width={220}
              height={100}
              className="h-20 w-auto object-contain mb-4"
            />
            <p className="text-[14.5px] text-white leading-relaxed font-bold max-w-[320px]">
              International gateway of choice for voice and data traffic
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[18px] font-black uppercase tracking-widest text-white mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/solutions" label="Solutions" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[18px] font-black uppercase tracking-widest text-white mb-4 sm:mb-6">
              Solutions
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <FooterLink href="/voice-calls" label="Voice Calls" />
              <FooterLink href="/sms" label="SMS" />
              <FooterLink href="/managed-services" label="Managed Services" />
              <FooterLink href="/ivr-services" label="IVR Services" />
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:pl-4">
            <h4 className="text-[18px] font-black uppercase tracking-widest text-white mb-4 sm:mb-6">
              Contact Us
            </h4>
            <div className="space-y-5 sm:space-y-6">
              <p className="text-[14.5px] text-white leading-relaxed font-bold">
                Level 3, Ebene House, Hotel Avenue<br />
                33 Cybercity, Ebene, 72201 Mauritius.
              </p>
              <a
                href="mailto:contact@vinbobtel.com"
                className="text-[14.5px] text-white font-black hover:text-white transition-colors duration-150 block"
              >
                contact@vinbobtel.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white pt-10 pb-4">
          <p className="text-center text-[13px] font-bold text-white">
            Copyright © 2025 – Vinbob Telecoms
          </p>
        </div>
      </div>
    </footer>
  );
}