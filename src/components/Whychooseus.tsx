import Image from "next/image";

const CHOOSE_IMAGE = "https://vinbobtel.com/wp-content/uploads/2024/08/choose.jpg";

const reasons = [
  {
    title: "Start-up minded",
    description:
      "We keep developing our technology to provide flexibility, making our customers' demands come true.",
  },
  {
    title: "Trusted partner",
    description:
      "Global multinationals such as Softbank rely on us to manage their telecom requirements.",
  },
  {
    title: "Global direct connectivity",
    description:
      "Our global reach combined with advanced cutting edge technology, puts us at the forefront of optimizing performance with our telecom solutions.",
  },
  {
    title: "Global Impact",
    description:
      "With a sharp focus on developing customized solutions, we are small enough to move efficiently with timely responses while being big enough to have a global impact.",
  },
  {
    title: "Commercial Leverage",
    description:
      "With many years in the Voice Wholesale arena building a vast sophisticated network of worldwide connectivity with advanced routing capabilities, we are a leading aggregator of global volumes creating competitive pricing for our customers.",
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#6d28d9"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[700px]">

      {/* ── Left: Full image ── */}
      <div className="relative w-full lg:w-1/2 min-h-[450px] lg:min-h-0">
        <Image
          src={CHOOSE_IMAGE}
          alt="Why choose Vinbob Telecoms"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ── Right: Pink content panel ── */}
      <div
        className="w-full lg:w-1/2 flex items-center px-10 sm:px-14 py-20"
        style={{ backgroundColor: "#f9d0cc" }}
      >
        <div className="max-w-xl w-full">
          <h2 className="text-[32px] sm:text-4xl font-[800] text-[#1a1a2e] mb-8 leading-tight">
            Why choose us
          </h2>

          <ul className="space-y-5">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <p className="text-[14px] font-bold text-[#1a1a2e] mb-0.5">
                    {reason.title}
                  </p>
                  <p className="text-[13px] text-gray-700 leading-relaxed italic">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}