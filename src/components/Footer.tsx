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
      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
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
        className="flex items-start gap-2 text-[14px] font-[600] text-blue-50 hover:text-white transition-colors duration-150"
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
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://vinbobtel.com/wp-content/uploads/2024/08/bg2.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-24 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="https://vinbobtel.com/wp-content/uploads/2024/08/logo-main-white.png"
              alt="Vinbob Telecoms"
              width={220}
              height={80}
              className="h-20 w-auto object-contain mb-8"
            />
            <p className="text-[14px] text-blue-50 leading-relaxed font-semibold max-w-[240px]">
              International gateway of choice for voice and data traffic
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[17px] font-black uppercase tracking-widest text-white mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/solutions" label="Solutions" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[17px] font-black uppercase tracking-widest text-white mb-8">
              Solutions
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/voice-calls" label="Voice Calls" />
              <FooterLink href="/sms" label="SMS" />
              <FooterLink href="/managed-services" label="Managed Services" />
              <FooterLink href="/ivr-services" label="IVR Services" />
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:pl-4">
            <h4 className="text-[17px] font-black uppercase tracking-widest text-white mb-8">
              Contact Us
            </h4>
            <div className="space-y-6">
              <p className="text-[14px] text-blue-50 leading-[1.8] font-semibold">
                Level 3, Ebene House, Hotel Avenue<br />
                33 Cybercity, Ebene, 72201 Mauritius.
              </p>
              <a
                href="mailto:contact@vinbobtel.com"
                className="text-[14px] text-blue-50 font-semibold hover:text-white transition-colors duration-150 block"
              >
                contact@vinbobtel.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-10 pb-4">
          <p className="text-center text-[13px] font-semibold text-white/80">
            Copyright © 2025 – Vinbob Telecoms
          </p>
        </div>
      </div>
    </footer>
  );
}