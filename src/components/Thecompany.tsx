import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function PageHero({ label, title, imageSrc, imageAlt = "" }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden h-[300px] sm:h-[260px] lg:h-[300px]">

      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
        priority
      />

      {/* Dark blue overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 30, 70, 0.55)" }}
      />

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1340px] mx-auto px-6 sm:px-6 lg:px-8">
        <p className="text-[13px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white mb-3">
          {label}
        </p>
        <h1 className="text-[29px] sm:text-[32px] lg:text-[38px] font-[800] text-white leading-[1.2] max-w-none sm:max-w-lg">
          {title}
        </h1>
      </div>

    </section>
  );
}