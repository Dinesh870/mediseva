
import { Link } from 'react-router-dom';

const AppointmentHero = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.9), rgba(236, 72, 153, 0.8)), url('https://readdy.ai/api/search-image?query=Doctor%20consultation%20room%20with%20patient%20appointment%20booking%2C%20medical%20office%20with%20calendar%20and%20scheduling%20system%2C%20healthcare%20appointment%20setting%20with%20professional%20atmosphere&width=1920&height=600&seq=appointment1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">Book Your Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Schedule your medical consultation with our experienced doctors. Choose your preferred time slot 
            and get instant confirmation for your appointment.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link to="/" className="hover:text-pink-300 transition-colors">Home</Link>
            <i className="fas fa-angle-right"></i>
            <span>Book Appointment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHero;
