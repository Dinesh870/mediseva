
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20exterior%20with%20glass%20facade%2C%20professional%20medical%20center%20architecture%2C%20healthcare%20facility%20with%20blue%20sky%20background%2C%20contemporary%20medical%20building%20design%2C%20clean%20and%20modern%20healthcare%20infrastructure&width=1920&height=600&seq=about1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">About MediSeva Healthcare</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in healthcare, providing professional medical services with compassion and excellence for over a decade.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <i className="fas fa-angle-right"></i>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
