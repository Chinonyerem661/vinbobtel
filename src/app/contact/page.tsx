import PageHero from "@/components/Thecompany";
import Contactus from "@/pages/Contact/Contactus";

export default function Contact() {
    return (
        <main>
            <PageHero
                label="CONTACT US"
                title="Our dedicated support team is available 24/7"
                imageSrc="https://vinbobtel.com/wp-content/uploads/2024/08/about.jpg"
                imageAlt="Contact Vinbob Telecoms"
            />
            <Contactus />
        </main>
    );
}
