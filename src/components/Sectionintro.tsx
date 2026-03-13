interface SectionIntroProps {
  title?: string;
  text: string | React.ReactNode;
  paddingY?: string;
}

export default function SectionIntro({ title, text, paddingY = "py-16 sm:py-24" }: SectionIntroProps) {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className={`w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${paddingY}`}>
        {title && (
          <h2 className="text-[#0a1f3c] text-[28px] sm:text-[32px] font-[800] mb-8 leading-tight">
            {title}
          </h2>
        )}
        <div className="text-[#333] text-[15px] sm:text-[16px] leading-[1.8] max-w-5xl text-left space-y-6">
          {text}
        </div>
      </div>
    </section>
  );
}