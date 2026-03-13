import Link from "next/link";

// ─── Icons ────────────────────────────────────────────────────────────────────

function VoiceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#6d28d9" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  );
}

function SmsIcon() {
  return (
    <svg width="48" height="36" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-auto">
      {/* Chat Bubble */}
      <path d="M35 20 H125 Q140 20 140 35 V70 Q140 85 125 85 H75 L50 105 V85 H35 Q20 85 20 70 V35 Q20 20 35 20 Z"
            stroke="#6c28d9" strokeWidth="5" strokeLinejoin="round" fill="none"/>
      {/* Text Lines */}
      <line x1="55" y1="40" x2="120" y2="40" stroke="#6c28d9" strokeWidth="6"/>
      <line x1="55" y1="55" x2="120" y2="55" stroke="#6c28d9" strokeWidth="6"/>
      <line x1="55" y1="70" x2="100" y2="70" stroke="#6c28d9" strokeWidth="6"/>
    </svg>
  );
}

function ManagedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#6d28d9" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  );
}

function IvrIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#6d28d9" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
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
      className={`flex flex-col items-center justify-center text-center px-6 py-10 rounded-lg transition-all duration-300 hover:-translate-y-1 ${
        highlighted ? "shadow-[0_8px_30px_rgba(109,40,217,0.15)] bg-white border border-[#d6eaed]" : "shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white border border-[#f3f4f6]"
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-[17px] font-[800] text-gray-900 mb-2">{title}</h3>
      <p className="text-[13px] text-gray-600 leading-relaxed font-normal">{description}</p>
    </Link>
  );
}

// ─── Solutions Grid ────────────────────────────────────────────────────────

export default function SolutionsGrid() {
  return (
    <section className="py-24 flex justify-center w-full" style={{ backgroundColor: "#f2f7fc" }}>
      <div className="w-full max-w-[1340px] px-5 sm:px-6 lg:px-8">
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
