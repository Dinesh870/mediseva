
import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(34, 197, 94, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20hospital%20reception%20desk%20with%20friendly%20staff%2C%20healthcare%20customer%20service%20area%2C%20medical%20facility%20contact%20center%2C%20professional%20healthcare%20communication%20environment&width=1920&height=600&seq=contact1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our healthcare team. We're here to answer your questions and help you with 
            your medical needs 24 hours a day, 7 days a week.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link to="/" className="hover:text-pink-300 transition-colors">Home</Link>
            <i className="fas fa-angle-right"></i>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
