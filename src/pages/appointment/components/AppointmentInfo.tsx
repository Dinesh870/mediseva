
const AppointmentInfo = () => {
  const workingHours = [
    { day: 'Monday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '08:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '08:00 AM - 10:00 PM' }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Emergency Hotline',
      info: '+91 8789736848',
      description: '24/7 Emergency Services'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      info: 'info@mediseva.com',
      description: 'General Inquiries'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      info: 'India',
      description: 'Our Location'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-6">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className={`${contact.icon} text-pink-600`}></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                <p className="text-gray-800 font-medium">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Working Hours</h3>
        <div className="space-y-4">
          {workingHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="font-medium text-gray-700">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <i className="fas fa-info-circle text-green-600 mr-2"></i>
            <p className="text-green-700 text-sm">
              We are open 7 days a week for your convenience. Emergency services available 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Guidelines */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Appointment Guidelines</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <i className="fas fa-check-circle text-green-500 mt-1"></i>
            <p className="text-gray-600">Please arrive 15 minutes before your scheduled appointment time.</p>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fas fa-check-circle text-green-500 mt-1"></i>
            <p className="text-gray-600">Bring a valid ID and insurance card if applicable.</p>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fas fa-check-circle text-green-500 mt-1"></i>
            <p className="text-gray-600">Cancel or reschedule at least 24 hours in advance.</p>
          </div>
          <div className="flex items-start space-x-3">
            <i className="fas fa-check-circle text-green-500 mt-1"></i>
            <p className="text-gray-600">Prepare a list of current medications and symptoms.</p>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="fas fa-exclamation-triangle text-red-600"></i>
          </div>
          <div>
            <h4 className="font-semibold text-red-900 mb-2">Emergency Situations</h4>
            <p className="text-red-700 mb-4">
              For life-threatening emergencies, please call our emergency hotline immediately or visit our emergency department.
            </p>
            <a
              href="tel:+918789736848"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Emergency: +91 8789736848
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfo;
