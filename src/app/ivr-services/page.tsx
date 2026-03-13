import PageHero from "@/components/Solutionshero";
import SectionIntro from "@/components/Sectionintro";
import SolutionsWhyChooseUs from "@/components/SolutionsWhyChooseUs";
import CTABanner from "@/components/Ctabanner";

const ivrFeatures = [
    {
        title: "Advanced Call Routing",
        description: "Our IVR services include advanced call routing features that direct calls to the appropriate departments or agents based on predefined criteria. This ensures that your customers are connected to the right resources quickly and efficiently."
    },
    {
        title: "Automated Customer Service",
        description: "Vinbobtel's IVR systems automate routine customer service tasks, such as account inquiries, bill payments, appointment scheduling, and more. This reduces the workload on your staff and provides customers with quick and convenient self-service options."
    },
    {
        title: "Voice Recognition and DTMF",
        description: "Our IVR solutions support both voice recognition and DTMF (Dual-Tone Multi-Frequency) inputs, allowing customers to interact with the system using voice commands or keypad inputs. This flexibility ensures a seamless user experience for all callers."
    },
    {
        title: "Personalized Greetings and Messages",
        description: "Enhance your brand image with personalized greetings and messages. Vinbobtel's IVR services allow you to customize welcome messages, on-hold music, and promotional announcements, creating a professional and engaging caller experience."
    },
    {
        title: "Real-Time Reporting and Analytics",
        description: "Gain insights into your call traffic and IVR performance with Vinbobtel's real-time reporting and analytics. Monitor key metrics such as call volume, average handling time, and drop-off rates to optimize your IVR system and improve customer satisfaction."
    },
    {
        title: "24/7 Availability",
        description: "Vinbobtel's IVR services ensure that your business is accessible to customers 24/7. Our reliable and robust systems handle high call volumes and provide uninterrupted service, ensuring that your customers can reach you at any time."
    },
    {
        title: "Integration with CRM and Other Systems",
        description: "Seamlessly integrate Vinbobtel's IVR solutions with your existing CRM (Customer Relationship Management) and other business systems. This integration enables efficient data exchange and enhances overall operational efficiency."
    }
];

export default function IvrServicesPage() {
    return (
        <main>
            <PageHero
                label="IVR SERVICES"
                title="Cost-effective, and user-friendly IVR systems"
                backgroundImage="https://vinbobtel.com/wp-content/uploads/2024/08/voip.jpg"
                backgroundPosition="65% 10%"
            />
            <SectionIntro
                title="Interactive Voice Response Services"
                paddingY="py-20 sm:py-32"
                text={
                    <>
                        <p>
                            Vinbobtel is a leading provider of IVR (Interactive Voice Response) services, dedicated to enhancing customer interactions through automated voice solutions. Our mission is to deliver efficient, cost-effective, and user-friendly IVR systems that streamline communication and improve customer satisfaction.
                        </p>
                        <p>
                            Vinbobtel specializes in designing and implementing custom IVR solutions tailored to your business needs. Whether you require simple call routing or complex multi-level menus, our team of experts will create an IVR system that meets your specific requirements.
                        </p>
                    </>
                }
            />
            <SolutionsWhyChooseUs 
                heading="Why choose our IVR Services"
                image="https://vinbobtel.com/wp-content/uploads/2024/08/ivr.jpg"
                features={ivrFeatures}
            />
            <CTABanner />
        </main>
    );
}
