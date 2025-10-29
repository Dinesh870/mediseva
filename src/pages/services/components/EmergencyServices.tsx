
import { Link } from 'react-router-dom';

const EmergencyServices = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Emergency%20medical%20room%20with%20advanced%20life%20support%20equipment%2C%20hospital%20emergency%20department%2C%20medical%20emergency%20response%20team%2C%20urgent%20care%20facility%20with%20modern%20medical%20technology&width=1920&height=600&seq=emergency1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
            <i className="fas fa-truck-medical text-3xl text-white"></i>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Emergency Medical Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Our emergency department is equipped with advanced medical technology and staffed by experienced emergency physicians 
              ready to provide immediate care 24 hours a day, 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white"></i>
              </div>
              <h4 className="text-lg font-semibold mb-2">Emergency Hotline</h4>
              <p className="text-white/90">+91 8789736848</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white"></i>
              </div>
              <h4 className="text-lg font-semibold mb-2">Response Time</h4>
              <p className="text-white/90">&lt; 5 Minutes</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ambulance text-white"></i>
              </div>
              <h4 className="text-lg font-semibold mb-2">Ambulance Fleet</h4>
              <p className="text-white/90">14 Vehicles</p>
            </div>
          </div>

          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
            >
              Contact Emergency Services
              <i className="fas fa-phone ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
