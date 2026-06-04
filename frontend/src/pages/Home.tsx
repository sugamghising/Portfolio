import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";

const Home = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Container>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;