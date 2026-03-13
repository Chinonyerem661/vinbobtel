interface FeatureItem {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  heading?: string;
  image?: string;
  features?: FeatureItem[];
}

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
    <circle cx="12" cy="12" r="10" stroke="#466270" strokeWidth="1.2" />
    <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#466270" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const defaultFeatures: FeatureItem[] = [
  {
    title: "Global Reach",
    description:
      "With a vast network of interconnections with top-tier carriers and telecommunications providers, Vinbobtel offers extensive global coverage. Our services span across continents, ensuring that your calls can reach any destination worldwide with unparalleled clarity.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We understand the importance of cost-efficiency in communication. Vinbobtel offers competitive rates for our VoIP call termination services, allowing businesses to reduce their telecommunication expenses without compromising on quality.",
  },
  {
    title: "Advanced Security",
    description:
      "Security is paramount in today's digital age. Vinbobtel employs state-of-the-art encryption and security protocols to protect your voice traffic from unauthorized access and cyber threats. Your data and privacy are safe with us.",
  },
  {
    title: "Scalability",
    description:
      "Whether you're a small business or a large enterprise, Vinbobtel's VoIP call termination services are scalable to meet your needs. Our flexible solutions can accommodate varying call volumes, ensuring that you only pay for what you use.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our intuitive and user-friendly interface makes it easy for clients to manage their accounts, monitor call traffic, and access real-time reports. Vinbobtel's platform is designed to provide a seamless user experience, enabling you to focus on your core business activities.",
  },
];

export default function SolutionsWhyChooseUs({
  heading = "Why choose us",
  image = "https://vinbobtel.com/wp-content/uploads/2024/08/a1.jpg",
  features = defaultFeatures,
}: WhyChooseUsProps) {
  return (
    <section className="flex flex-col lg:flex-row w-full w-full min-h-[600px] bg-[#eef7f9]">
      {/* Left: Image */}
      <div className="w-full lg:w-[45%] xl:w-[40%] relative min-h-[400px] lg:min-h-[auto]">
        <img
          src={image}
          alt={heading}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-[55%] xl:w-[60%] px-8 sm:px-16 lg:px-24 xl:px-32 py-16 sm:py-24 flex flex-col justify-center text-[#0a1f3c]">
        <h2 className="text-[36px] sm:text-[44px] font-[800] mb-12 leading-tight">
          {heading}
        </h2>

        <ul className="space-y-6 max-w-2xl">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4 items-start">
              <CheckIcon />
              <div className="pt-0.5">
                <p className="text-[17px] sm:text-[18px] font-bold mb-2 leading-[1.2]">
                  {feature.title}
                </p>
                <p className="text-[#0a1f3c] text-[14px] sm:text-[15px] leading-[1.75] font-medium opacity-90">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
