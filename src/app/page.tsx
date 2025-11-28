import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import RecruitmentProcess from "@/components/recruitment-process";
import Team from "@/components/team-preview";
import Contact from "@/components/contact";
import ClientsCarousel from "@/components/clients-carousel";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <RecruitmentProcess />
      <ClientsCarousel />
      <Team />
      <Contact />
    </main>
  );
}
