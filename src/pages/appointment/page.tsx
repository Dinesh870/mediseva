
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AppointmentHero from './components/AppointmentHero';
import AppointmentForm from './components/AppointmentForm';
import AppointmentInfo from './components/AppointmentInfo';

const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AppointmentHero />
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AppointmentForm />
            <AppointmentInfo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
