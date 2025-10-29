
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AboutHero from './components/AboutHero';
import AboutContent from './components/AboutContent';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutContent />
      <WhyChooseUs />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
