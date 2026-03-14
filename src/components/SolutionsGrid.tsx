import Link from "next/link";
import Image from "next/image";

// ─── Assets ───────────────────────────────────────────────────────────────────
import MicrophoneIcon from "@/assets/microphone.svg";
import ChatBoxIcon from "@/assets/chat box.svg";
import ManagedServicesIcon from "@/assets/managed services.svg";
import IvrServicesIcon from "@/assets/ivr services.svg";

// ─── Icons ────────────────────────────────────────────────────────────────────

function VoiceIcon() {
  return (
    <Image 
      src={MicrophoneIcon} 
      alt="Voice Calls" 
      width={120} 
      height={120} 
    />
  );
}

function SmsIcon() {
  return (
    <Image 
      src={ChatBoxIcon} 
      alt="SMS" 
      width={120} 
      height={120} 
    />
  );
}

function ManagedIcon() {
  return (
    <Image 
      src={ManagedServicesIcon} 
      alt="Managed Services" 
      width={120} 
      height={120} 
    />
  );
}

function IvrIcon() {
  return (
    <Image 
      src={IvrServicesIcon} 
      alt="IVR Services" 
      width={120} 
      height={120} 
    />
  );
}

// ─── Solution Card ────────────────────────────────────────────────────────────
interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  highlighted?: boolean;
}

function SolutionCard({ icon, title, description, href, highlighted = false }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center text-center px-12 py-9 rounded-xl transition-all duration-300 hover:-translate-y-1 border border-transparent sm:hover:border-[#bbf7d0] sm:hover:shadow-[0_12px_40px_rgba(109,40,217,0.18)] ${
        highlighted 
          ? "shadow-[0_8px_30px_rgba(109,40,217,0.15)] bg-white" 
          : "shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white"
      }`}
    >
      <div className="mb-4 sm:mb-5">{icon}</div>
      <h3 className="text-[17px] font-[800] text-gray-900 mb-2 sm:mb-3 uppercase sm:normal-case">{title}</h3>
      <p className="text-[14.5px] sm:text-sm text-gray-900 leading-relaxed font-bold sm:font-normal max-w-[260px] sm:max-w-none">{description}</p>
    </Link>
  );
}

// ─── Solutions Grid ────────────────────────────────────────────────────────

export default function SolutionsGrid() {
  return (
    <section className="pt-10 pb-20 sm:py-24 flex justify-center w-full" style={{ backgroundColor: "#f2f7fc" }}>
      <div className="w-full max-w-[1340px] px-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 overflow-hidden">
            <SolutionCard
              icon={<VoiceIcon />}
              title="Voice Calls"
              description="High-quality and cost-effective communication solutions"
              href="/voice-calls"
            />
            <SolutionCard
              icon={<SmsIcon />}
              title="SMS"
              description="Facilitating seamless, efficient, and cost-effective text messaging"
              href="/sms"
            />
            <SolutionCard
              icon={<ManagedIcon />}
              title="Managed Services"
              description="Solutions to help businesses streamline operations"
              href="/managed-services"
            />
            <SolutionCard
              icon={<IvrIcon />}
              title="IVR Services"
              description="Enhancing interactions through automated voice solutions"
              href="/ivr-services"
            />
          </div>
      </div>
    </section>
  );
}
