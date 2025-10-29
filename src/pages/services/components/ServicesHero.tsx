
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20medical%20equipment%20and%20healthcare%20technology%2C%20advanced%20hospital%20machinery%2C%20medical%20devices%20in%20clean%20sterile%20environment%2C%20professional%20healthcare%20facility%20interior%20with%20medical%20instruments&width=1920&height=600&seq=services1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">Our Medical Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services delivered by experienced medical professionals using state-of-the-art technology and equipment.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <i className="fas fa-angle-right"></i>
            <span>Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
