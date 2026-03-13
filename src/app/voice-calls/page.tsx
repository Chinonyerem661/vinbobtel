import PageHero from "@/components/Solutionshero";
import SectionIntro from "@/components/Sectionintro";
import SolutionsWhyChooseUs from "@/components/SolutionsWhyChooseUs";
import CTABanner from "@/components/Ctabanner";

const voiceFeatures = [
    {
        title: "Global Reach",
        description: "With a vast network of interconnections with top-tier carriers and telecommunications providers, Vinbobtel offers extensive global coverage. Our services span across continents, ensuring that your calls can reach any destination worldwide with unparalleled clarity."
    },
    {
        title: "Competitive Pricing",
        description: "We understand the importance of cost-efficiency in communication. Vinbobtel offers competitive rates for our VoIP call termination services, allowing businesses to reduce their telecommunication expenses without compromising on quality."
    },
    {
        title: "24/7 Support",
        description: "At Vinbobtel, customer satisfaction is our priority. Our dedicated support team is available 24/7 to assist you with any queries, technical issues, or service requirements. We are committed to providing prompt and effective solutions to ensure uninterrupted communication."
    },
    {
        title: "Advanced Security",
        description: "Security is paramount in today's digital age. Vinbobtel employs state-of-the-art encryption and security protocols to protect your voice traffic from unauthorized access and cyber threats. Your data and privacy are safe with us."
    },
    {
        title: "Scalability",
        description: "Whether you're a small business or a large enterprise, Vinbobtel's VoIP call termination services are scalable to meet your needs. Our flexible solutions can accommodate varying call volumes, ensuring that you only pay for what you use."
    },
    {
        title: "User-Friendly Interface",
        description: "Our intuitive and user-friendly interface makes it easy for clients to manage their accounts, monitor call traffic, and access real-time reports. Vinbobtel's platform is designed to provide a seamless user experience, enabling you to focus on your core business activities."
    }
];

export default function VoiceCalls() {
    return (
        <main>
            <PageHero
                label="VOICE CALLS"
                title="High-quality, cost-effective Voice call termination"
                backgroundImage="https://vinbobtel.com/wp-content/uploads/2024/08/voip.jpg"
                backgroundPosition="65% 10%"
            />
            <SectionIntro
                title="VoIP Termination Services"
                paddingY="py-20 sm:py-32"
                text={
                    <>
                        <p>
                            Vinbobtel is a leading provider of VoIP (Voice over Internet Protocol) call termination services, dedicated to delivering high-quality and cost-effective communication solutions to businesses and individuals worldwide. Our mission is to ensure seamless, reliable, and crystal-clear voice connections, enabling our clients to stay connected with their partners, customers, and loved ones without interruption.
                        </p>
                        <p>
                            Vinbobtel specializes in VoIP call termination, routing voice traffic over the internet to ensure efficient and cost-effective call delivery. Our advanced technology and robust infrastructure guarantee high call quality and minimal latency, providing an excellent user experience.
                        </p>
                    </>
                }
            />
            <SolutionsWhyChooseUs 
                heading="Why choose our voice call services"
                features={voiceFeatures}
            />
            <CTABanner />
        </main>
    );
}
