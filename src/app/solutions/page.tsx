import PageHero from "@/components/Solutionshero";
import SectionIntro from "@/components/Sectionintro";
import SolutionsGrid from "@/components/SolutionsGrid";
import SolutionsWhyChooseUs from "@/components/SolutionsWhyChooseUs";

export default function Solutions() {
    return (
        <main>
            <PageHero
                label="SOLUTIONS"
                title="Cost-effective solutions"
                backgroundImage="https://vinbobtel.com/wp-content/uploads/2024/08/voip.jpg"
            />
            <SectionIntro
                text="Multiple global interconnections and a robust global infrastructure network makes us the ideal choice for international voip carriers, mobile operators and retail service providers looking for high quality worldwide voice services."
            />
            <SolutionsGrid />
            <SolutionsWhyChooseUs />
        </main>
    );
}
