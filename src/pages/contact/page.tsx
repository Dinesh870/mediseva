
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import MapSection from './components/MapSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
