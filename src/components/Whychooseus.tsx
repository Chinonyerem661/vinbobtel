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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1">
      {/* Circle with a gap for the checkmark tail */}
      <path
        d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.56.94 6.18 2.47"
        stroke="#466270"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Checkmark that "comes out" of the circle */}
      <path
        d="M9 11l3 3L22 4"
        stroke="#466270"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[700px]">

      {/* Left: Full image */}
      <div className="relative w-full lg:w-1/2 min-h-[450px] lg:min-h-0">
        <Image
          src={CHOOSE_IMAGE}
          alt="Why choose Vinbob Telecoms"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Right: Soft Pink content panel */}
      <div
        className="w-full lg:w-1/2 flex items-center px-8 sm:px-16 lg:px-20 py-16 sm:py-24"
        style={{ backgroundColor: "#fbd3d1" }}
      >
        <div className="max-w-2xl w-full">
          <h2 className="text-[36px] sm:text-[40px] font-[800] text-[#0a1f3c] mb-10 leading-tight">
            Why choose us
          </h2>

          <ul className="space-y-7">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-start gap-3">
                <CheckIcon />
                <div className="pt-0.5">
                  <p className="text-[17.5px] sm:text-[18px] font-black text-[#0a1f3c] mb-1">
                    {reason.title}
                  </p>
                  <p className="text-[14.5px] sm:text-[15px] text-black leading-[1.6] font-normal max-w-2xl">
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