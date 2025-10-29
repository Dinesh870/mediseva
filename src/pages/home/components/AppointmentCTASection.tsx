
import React from 'react';
import { Link } from 'react-router-dom';

export const AppointmentCTASection: React.FC = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20interior%20with%20professional%20healthcare%20environment%2C%20clean%20hospital%20corridor%20with%20natural%20lighting%2C%20medical%20equipment%20in%20background%2C%20contemporary%20healthcare%20setting%20with%20calming%20atmosphere&width=1920&height=600&seq=cta1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait for tomorrow. Book your appointment today and take the first step towards better health with our expert medical team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/appointment"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-calendar-plus mr-3"></i>
              Book Appointment Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-phone mr-3"></i>
              Call Us: +91 8789736848
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Available</h3>
              <p className="opacity-90">Emergency services available round the clock</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-md text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
              <p className="opacity-90">Highly qualified medical professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="opacity-90">Your health and privacy are our priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTASection;
