interface PageHeroProps {
  label: string;
  title: string;
  backgroundImage?: string;
  backgroundPosition?: string;
}

export default function PageHero({
  label,
  title,
  backgroundImage = "https://vinbobtel.com/wp-content/uploads/2024/08/voip.jpg",
  backgroundPosition = "60% -20%",
}: PageHeroProps) {
  return (
    <section
      className="relative w-full h-[300px] sm:h-[260px] lg:h-[260px] flex flex-col justify-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition }}
    >
      {/* Dark overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(20, 30, 70, 0.55)" }}
      />

      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-6 sm:px-6 lg:px-8">
        <p className="text-white text-[13px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3">
          {label}
        </p>
        <h1 className="text-[29px] sm:text-[32px] lg:text-[38px] font-[800] text-white leading-[1.2] max-w-none sm:max-w-lg">
          {title}
        </h1>
      </div>
    </section>
  );
}