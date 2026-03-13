const checkIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1">
    <path
      d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.56.94 6.18 2.47"
      stroke="#0f1f3d"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M9 11l3 3L22 4"
      stroke="#0f1f3d"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const pillars = [
  { title: "Our Vision", description: "To be the international gateway of choice for voice and SMS." },
  { title: "Our Mission", description: "To provide international wholesale service globally." },
  { title: "Core Values", bullets: ["Integrity", "Secure and high-density infrastructure", "Constant and aggressive partner engagement"] },
];

export default function ContinuousEvolution() {
  return (
    <section className="bg-white py-12 sm:py-[72px]">
      <div className="max-w-[1340px] mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-[28px] sm:text-4xl font-[700] text-[#0f1f3d] mb-8 leading-[1.2]">
          Continuous evolution and development
        </h2>

        <p className="text-base text-gray-600 leading-[1.7] mb-6">
          Our emphasis in technology and process automation has allowed Vinbobtel to remain as one of the leading voice and SMS carriers, with global connectivity and limitless adaptation to the different challenges of the ever-changing wholesale markets.
        </p>

        <p className="text-base text-gray-600 leading-[1.7] mb-8">
          Our company is built on the idea of empowerment and the removal of the arbitrary limits that had held small to mid-range telecom businesses down for far too long. Our longstanding commitment to excellence, innovative products, and dedication to phenomenal customer service provides our clients with the support system they need to take their business to the next level.
        </p>

        <ul className="flex flex-col gap-7 mt-8">
          {pillars.map((p) => (
            <li key={p.title}>
              <div className="flex items-start gap-3">
                {checkIcon}
                <div>
                  <p className="text-base font-bold text-[#0f1f3d] mb-1">{p.title}</p>
                  {p.description && (
                    <p className="text-[15px] text-gray-600 leading-[1.6]">{p.description}</p>
                  )}
                  {p.bullets && p.bullets.map((b) => (
                    <p key={b} className="text-[15px] font-bold text-[#0f1f3d] leading-[1.6]">{b}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}