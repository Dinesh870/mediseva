
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(239, 246, 255, 0.9), rgba(219, 234, 254, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20with%20professional%20healthcare%20environment%2C%20clean%20white%20medical%20equipment%2C%20bright%20hospital%20interior%20with%20natural%20lighting%2C%20medical%20professionals%20in%20background%2C%20sterile%20and%20welcoming%20atmosphere%2C%20contemporary%20healthcare%20setting%20with%20blue%20and%20white%20color%20scheme&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-blue-600">We Are Here to Care for You</h4>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 leading-tight">
                Professional and<br />
                Convenient{' '}
                <span className="text-blue-600">Appointment Booking</span><br />
                Just for You
              </h1>
              <p className="text-lg text-blue-700 leading-relaxed max-w-xl">
                Schedule your medical appointments effortlessly with our trusted platform. Connect with top doctors and receive quality healthcare at your convenience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                Book Now
                <i className="fas fa-angle-double-right ml-2"></i>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20in%20white%20coat%20with%20stethoscope%2C%20smiling%20confidently%2C%20modern%20medical%20office%20background%2C%20healthcare%20professional%20portrait%2C%20clean%20medical%20environment%2C%20trustworthy%20medical%20practitioner&width=600&height=700&seq=hero2&orientation=portrait"
                alt="Professional Doctor"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-user-md text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800">24/7 Available</div>
                    <div className="text-sm text-blue-600">Expert Doctors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
