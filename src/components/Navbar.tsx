"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    closeTimeout?: NodeJS.Timeout;
  }
}

// Vinbob Logo
function VinbobLogo({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <Link href="/" className="flex-shrink-0 z-20">
      <Image
        src="https://vinbobtel.com/wp-content/uploads/2024/08/logo2.png"
        alt="Vinbob Telecoms"
        width={280}
        height={90}
        className={`w-auto object-contain transition-all duration-300 ${
          scrolled ? "h-10 sm:h-14" : "h-14 sm:h-20"
        }`}
        priority
      />
    </Link>
  );
}

// Chevron Down
function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-3.5 h-3.5 inline-block ml-0.5 transition-transform duration-200 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// ─── Hamburger Icon
function HamburgerIcon() {
  return (
    <div className="flex flex-col justify-center items-center w-11 h-11 border border-gray-200 rounded-sm gap-1.5 ml-auto">
      <span className="w-5 h-[1.5px] bg-[#000] block"></span>
      <span className="w-5 h-[1.5px] bg-[#000] block"></span>
      <span className="w-5 h-[1.5px] bg-[#000] block"></span>
    </div>
  );
}

// Close Icon
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

//Types
interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Nav Data
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Voice calls", href: "/voice-calls" },
      { label: "SMS", href: "/sms" },
      { label: "IVR Services", href: "/ivr-services" },
      { label: "Managed Services", href: "/managed-services" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// Navbar
export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState<boolean>(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : pathname === "/"
            ? "py-3"
            : "bg-white shadow-md py-3.5"
        }`}
        style={{
          backgroundColor:
            scrolled || pathname !== "/" ? "#ffffff" : "transparent",
        }}
      >
        <div className="max-w-[1340px] w-full mx-auto px-8 sm:px-6 lg:px-8 flex items-center justify-between relative h-full">
          {/* Logo */}
          <VinbobLogo scrolled={scrolled} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 z-10">
            {navLinks.map((link) =>
              link.children ? (
                // Dropdown
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => {
                    if (window.closeTimeout) clearTimeout(window.closeTimeout);
                    setSolutionsOpen(true);
                  }}
                  onMouseLeave={() => {
                    window.closeTimeout = setTimeout(() => {
                      setSolutionsOpen(false);
                    }, 300); // 300ms delay
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-[15px] font-bold tracking-tight flex items-center transition-colors duration-150 uppercase ${
                      isActive(link.href) || (link.children && solutionsOpen)
                        ? "text-[#7c3aed]"
                        : "text-[#334155] hover:text-[#7c3aed]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {solutionsOpen && (
                    <div className="absolute top-[calc(100%+0.5rem)] left-0 w-56 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)]  py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-6 py-2.5 text-[15px] font-semibold transition-colors duration-150 ${
                            isActive(child.href)
                              ? "text-[#7c3aed]"
                              : "text-[#000] hover:text-[#7c3aed]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[15px] font-bold tracking-tight transition-colors duration-150 uppercase ${
                    isActive(link.href)
                      ? "text-[#7c3aed]"
                      : "text-[#334155] hover:text-[#7c3aed]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden z-20"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        {mobileOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/5 lg:hidden" 
            onClick={() => setMobileOpen(false)} 
          />
        )}
        
        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-[100dvh] w-[260px] sm:w-[260px] z-50 transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
          } lg:hidden overflow-y-auto`}
          style={{ backgroundColor: "#c2e5e9ff" }}
        >
          <div className="flex justify-end p-6 mb-0">
            <button onClick={() => setMobileOpen(false)} className="p-1 hover:opacity-70 transition-opacity">
              <CloseIcon />
            </button>
          </div>
          <nav className="px-10 pb-10 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="w-full flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="text-[18px] font-bold text-black hover:text-[#7c3aed] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <button
                      className="p-1"
                      onClick={() => setMobileSolutionsOpen((o) => !o)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 text-black transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-0" : "rotate-180"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 flex flex-col gap-3 ${
                      mobileSolutionsOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center text-[16px] font-bold text-black hover:text-[#7c3aed] transition-colors pl-4"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-400 mr-4"></span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[18px] font-bold text-black block hover:text-[#7c3aed] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content jumping under fixed navbar */}
      {pathname !== "/" && <div className="h-16" />}
    </>
  );
}