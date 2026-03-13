import PageHero from "@/components/Thecompany";
import ContinuousEvolution from "@/pages/About/Continuousevolution";
import WhyChooseUs from "@/components/Whychooseus";
import CTABanner from "@/components/Ctabanner";

export default function About() {
    return (
        <main>
            <PageHero
                label="THE COMPANY"
                title="Commitment to excellence and innovative solutions"
                imageSrc="https://vinbobtel.com/wp-content/uploads/2024/08/about.jpg"
                imageAlt="About Vinbob Telecoms"
            />
            <ContinuousEvolution />
             <WhyChooseUs />
                  <CTABanner />
        </main>
    );
}