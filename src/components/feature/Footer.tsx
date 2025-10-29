
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img src="https://medisevahealthcare.com/images/footer-logo.png" alt="MediSeva Healthcare" className="h-12 mb-4" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                <div>
                  <div className="font-semibold">ADDRESS</div>
                  <div className="text-blue-100">India</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-phone text-blue-400 mt-1"></i>
                <div>
                  <div className="font-semibold">PHONE</div>
                  <div className="text-blue-100">+91 8789736848</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-envelope text-blue-400 mt-1"></i>
                <div>
                  <div className="font-semibold">EMAIL</div>
                  <div className="text-blue-100">info@mediseva.com</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  Appointments
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  General Consultation
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  Specialist Care
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <i className="fas fa-angle-right mr-2 text-blue-400"></i>
                  Health Check-ups
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-100">Monday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Tuesday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Wednesday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Thursday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Friday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Saturday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Sunday</span>
                <span className="text-white">08:00am - 10:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © Copyright 2025 - 26 Design by Genskytech ! All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://readdy.ai/?origin=logo" 
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
