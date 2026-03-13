import PageHero from "@/components/Solutionshero";
import SectionIntro from "@/components/Sectionintro";
import SolutionsWhyChooseUs from "@/components/SolutionsWhyChooseUs";
import CTABanner from "@/components/Ctabanner";

const managedFeatures = [
    {
        title: "IT Infrastructure Management",
        description: "Vinbobtel provides end-to-end management of your IT infrastructure, including servers, networks, storage, and cloud environments. Our team of experts ensures that your systems are optimized, secure, and running smoothly at all times."
    },
    {
        title: "Network Management",
        description: "We offer robust network management services to ensure your network is reliable, secure, and performs at its best. Our services include network monitoring, maintenance, troubleshooting, and optimization to support your business operations."
    },
    {
        title: "Cybersecurity Services",
        description: "Protect your business from cyber threats with Vinbobtel's comprehensive cybersecurity services. We offer threat detection, vulnerability assessments, firewall management, and incident response to safeguard your critical data and systems."
    },
    {
        title: "Cloud Services Management",
        description: "Vinbobtel's managed cloud services help you leverage the power of cloud computing. We assist with cloud strategy, migration, deployment, and ongoing management to ensure your cloud environment is scalable, secure, and cost-effective."
    },
    {
        title: "Help Desk and Technical Support",
        description: "Our 24/7 help desk and technical support services provide timely and effective assistance for any IT-related issues. Our knowledgeable support team is always available to resolve problems, minimizing downtime and ensuring business continuity."
    }
];

export default function ManagedServicesPage() {
    return (
        <main>
            <PageHero
                label="MANAGED SERVICES"
                title="High-quality, cost effective voice call termination"
                backgroundImage="https://vinbobtel.com/wp-content/uploads/2024/08/voip.jpg"
                backgroundPosition="65% 10%"
            />
            <SectionIntro
                title="Comprehensive solutions"
                paddingY="py-20 sm:py-32"
                text={
                    <p>
                        Vinbobtel is a trusted provider of managed services, offering comprehensive solutions to help businesses streamline operations, enhance efficiency, and focus on core activities. Our mission is to provide expert management and support for your IT infrastructure, allowing you to achieve your business goals with confidence.
                    </p>
                }
            />
            <SolutionsWhyChooseUs 
                heading="Why choose our Managed Services"
                features={managedFeatures}
            />
            <CTABanner />
        </main>
    );
}
