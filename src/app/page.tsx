import Header from "../pages/Home/Header";
import Oursolutions from "../pages/Home/Oursolutions";
import Evolutionsection from "../pages/Home/Evolutionsection";
import WhyChooseUs from "../components/Whychooseus";
import CTABanner from "../components/Ctabanner";

export default function Home() {
  return (
    <main>
      <Header />
      <Oursolutions />
      <Evolutionsection />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}