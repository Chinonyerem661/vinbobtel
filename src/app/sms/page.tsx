import PageHero from "@/components/Solutionshero";
import SectionIntro from "@/components/Sectionintro";
import SolutionsWhyChooseUs from "@/components/SolutionsWhyChooseUs";
import CTABanner from "@/components/Ctabanner";

const smsFeatures = [
    {
        title: "Global Reach",
        description: "With a vast network of interconnections with top-tier carriers and telecommunications providers, Vinbobtel offers extensive global SMS coverage. Our services span across continents, ensuring that your messages can reach any destination worldwide with speed and reliability."
    },
    {
        title: "Competitive Pricing",
        description: "We understand the importance of cost-efficiency in communication. Vinbobtel offers competitive rates for our SMS termination services, allowing businesses to reduce their messaging expenses without compromising on quality or delivery speed."
    },
    {
        title: "24/7 Support",
        description: "At Vinbobtel, customer satisfaction is our priority. Our dedicated support team is available 24/7 to assist you with any queries, technical issues, or service requirements for your SMS campaigns and delivery."
    },
    {
        title: "High Delivery Rates",
        description: "Our advanced technology and robust infrastructure guarantee high SMS delivery rates and minimal latency. We ensure that your text messages are delivered to recipients quickly and reliably, regardless of their location."
    },
    {
        title: "Scalability",
        description: "Whether you're a small business or a large enterprise, Vinbobtel's SMS termination services are scalable to meet your needs. Our flexible solutions can accommodate varying messaging volumes, ensuring you only pay for what you use."
    },
    {
        title: "User-Friendly Interface",
        description: "Our intuitive and user-friendly interface makes it easy for clients to manage their SMS accounts, monitor message traffic, and access real-time reports. Our platform is designed to provide a seamless user experience."
    }
];

export default function SmsPage() {
    return (
        <main>
            <PageHero
                label="SMS"
                title="High-quality, cost-effective SMS termination"
                backgroundImage="https://vinbobtel.com/wp-content/uploads/2024/08/voip.jpg"
                backgroundPosition="65% 10%"
            />
            <SectionIntro
                title="SMS Services"
                paddingY="py-20 sm:py-32"
                text={
                    <>
                        <p>
                            Vinbobtel is a premier provider of SMS termination services, dedicated to facilitating seamless, efficient, and cost-effective text messaging for businesses and individuals around the globe. Our mission is to ensure reliable and secure delivery of SMS messages, enabling our clients to maintain effective communication with their audience.
                        </p>
                        <p>
                            Vinbobtel specializes in SMS termination, ensuring that your text messages are delivered to recipients quickly and reliably, regardless of their location. Our advanced technology and robust infrastructure guarantee high delivery rates and minimal latency.
                        </p>
                    </>
                }
            />
            <SolutionsWhyChooseUs 
                heading="Why choose our SMS services"
                image="https://vinbobtel.com/wp-content/uploads/2024/08/sms2.jpg"
                features={smsFeatures}
            />
            <CTABanner />
        </main>
    );
}
