
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import ServiceFeatures from './components/ServiceFeatures';
import EmergencyServices from './components/EmergencyServices';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ServiceFeatures />
      <EmergencyServices />
      <Footer />
    </div>
  );
};

export default ServicesPage;
