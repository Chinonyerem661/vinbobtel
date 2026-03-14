import Link from "next/link";
import Image from "next/image";

// Assets
import MicrophoneIcon from "@/assets/microphone.svg";
import ChatBoxIcon from "@/assets/chat box.svg";
import ManagedServicesIcon from "@/assets/managed services.svg";
import IvrServicesIcon from "@/assets/ivr services.svg";

// Icons

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
      width={128} 
      height={128} 
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

// Solution Card
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
      className="flex flex-col items-center text-center px-12 py-9 sm:p-8 rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 border border-transparent sm:hover:border-[#bbf7d0] hover:shadow-[0_12px_40px_rgba(109,40,217,0.18)]"
    >
      <div className="mb-4 sm:mb-5">{icon}</div>
      <h3 className="text-[17px] sm:text-lg font-[800] text-gray-900 mb-2 sm:mb-3 uppercase sm:normal-case">{title}</h3>
      <p className="text-[14.5px] sm:text-sm text-gray-900 leading-relaxed font-bold sm:font-normal max-w-[260px] sm:max-w-none">{description}</p>
    </Link>
  );
}

// Solutions Section
export default function SolutionsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#eef1f8" }}>
      <div className="max-w-[1340px] mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left: Text */}
          <div className="w-full lg:w-5/12 lg:pt-6">
            <p
              className="text-sm font-black uppercase tracking-widest mb-4"
              style={{ color: "#6d28d9" }}
            >
              Our Solutions
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Cost-effective solutions
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-10">
              Multiple global interconnections and a robust global infrastructure network makes
              us the ideal choice for international voip carriers, mobile operators and retail
              service providers looking for high quality worldwide voice and SMS services.
            </p>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: "#6d28d9" }}
            >
              Learn More →
            </Link>
          </div>

          {/* Right: 2x2 Card Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 sm:px-0">
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
      </div>
    </section>
  );
}