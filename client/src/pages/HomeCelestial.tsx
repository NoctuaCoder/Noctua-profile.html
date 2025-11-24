import HeaderCelestial from "@/components/HeaderCelestial";
import HeroCelestial from "@/components/HeroCelestial";
import AboutCelestial from "@/components/AboutCelestial";
import ProjectsCelestial from "@/components/ProjectsCelestial";
import ContactCelestial from "@/components/ContactCelestial";
import FooterCelestial from "@/components/FooterCelestial";
import CelestialBackground from "@/components/CelestialBackground";

export default function HomeCelestial() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Celestial background with stars and particles */}
      <CelestialBackground />

      {/* Header */}
      <HeaderCelestial />

      {/* Main content */}
      <main className="flex-1">
        <section id="home">
          <HeroCelestial />
        </section>
        <section id="about">
          <AboutCelestial />
        </section>
        <section id="projects">
          <ProjectsCelestial />
        </section>
        <section id="contact">
          <ContactCelestial />
        </section>
      </main>

      {/* Footer */}
      <FooterCelestial />
    </div>
  );
}
