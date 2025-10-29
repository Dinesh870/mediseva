
const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      primary: '+91 8789736848',
      secondary: '24/7 Emergency Hotline',
      color: 'bg-blue-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      primary: 'info@mediseva.com',
      secondary: 'General Inquiries',
      color: 'bg-green-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      primary: 'India',
      secondary: 'Visit Our Facility',
      color: 'bg-red-500'
    },
    {
      icon: 'fas fa-clock',
      title: 'Hours',
      primary: '08:00 AM - 10:00 PM',
      secondary: 'Monday - Sunday',
      color: 'bg-purple-500'
    }
  ];

  const departments = [
    {
      name: 'Emergency Department',
      phone: '+91 8789736848',
      hours: '24/7'
    },
    {
      name: 'Appointment Booking',
      phone: '+91 8789736848',
      hours: '08:00 AM - 10:00 PM'
    },
    {
      name: 'Patient Services',
      phone: '+91 8789736848',
      hours: '08:00 AM - 08:00 PM'
    },
    {
      name: 'Billing Department',
      phone: '+91 8789736848',
      hours: '09:00 AM - 06:00 PM'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${method.icon} text-white text-xl`}></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
              <p className="text-gray-800 font-medium">{method.primary}</p>
              <p className="text-gray-600 text-sm">{method.secondary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Department Contacts */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div>
                <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                <p className="text-gray-600 text-sm">{dept.hours}</p>
              </div>
              <a
                href={`tel:${dept.phone}`}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                <i className="fas fa-phone mr-2"></i>
                Call
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-gray-600 mt-4">
          Stay connected with us for health tips, medical updates, and important announcements.
        </p>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="mb-6">Subscribe to our newsletter for health tips and medical updates.</p>
        <form 
          action="https://readdy.ai/api/form/d3tubo9sbcb07rsl7d8g" 
          method="POST" 
          data-readdy-form 
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
