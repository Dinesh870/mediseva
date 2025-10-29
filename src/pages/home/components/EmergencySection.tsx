
import React from 'react';

export const EmergencySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-truck-medical text-3xl"></i>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Easy & Hassle-Free<br />
                  Appointment Booking
                </h2>
              </div>
            </div>
            
            <h5 className="text-xl font-semibold">
              Book appointments with top doctors at your convenience, anytime between 10 AM - 8 PM.
            </h5>
            
            <div className="space-y-4 text-lg">
              <p>
                Our seamless and secure booking system allows you to schedule consultations effortlessly, ensuring you get the care you need without long wait times.
              </p>
              <p>
                Trusted by thousands, our platform connects you with expert doctors for timely and efficient medical assistance.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-phone-volume text-xl"></i>
              </div>
              <div>
                <h6 className="text-xl font-bold">Book Your Appointment Now</h6>
                <p className="text-lg">+91 28624 79555</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://medisevahealthcare.com/images/doctor-image.png" 
              alt="Medical professionals" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
