
import React from 'react';
import { Button } from '../../../components/base/Button';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://medisevahealthcare.com/images/about-img.jpg" 
              alt="Medical professionals" 
              className="rounded-2xl shadow-2xl object-cover w-full h-96"
            />
            
            {/* Delivery Hours Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center mb-4">
                <img src="https://medisevahealthcare.com/images/fav-icon.png" alt="Icon" className="w-8 h-8 mr-3" />
                <h5 className="font-bold text-blue-800">Service Hours</h5>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-600">Monday - Friday:</span>
                  <span className="font-semibold text-blue-800">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600">Saturday:</span>
                  <span className="font-semibold text-blue-800">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600">Sunday:</span>
                  <span className="font-semibold text-blue-800">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h6 className="text-blue-600 font-semibold text-lg">About Us</h6>
              <h2 className="text-4xl font-bold text-blue-800 leading-tight">
                Book Appointments with Top Doctors Effortlessly
              </h2>
              <div className="space-y-4 text-blue-600 leading-relaxed">
                <p>
                  Schedule your medical appointments online with ease. Find experienced doctors, choose your preferred time slot, and get instant confirmation—all from the comfort of your home.
                </p>
                <p>
                  Convenient, secure, and trusted by thousands. Book now and take control of your healthcare journey.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  <span className="font-semibold text-blue-800">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  <span className="font-semibold text-blue-800">Expert Doctors</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  <span className="font-semibold text-blue-800">Easy Booking</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  <span className="font-semibold text-blue-800">Secure Platform</span>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="group">
              Book an Appointment
              <i className="fas fa-angle-double-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
