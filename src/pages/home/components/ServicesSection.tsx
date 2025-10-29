
import React from 'react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Book An Appointment',
      description: 'Schedule your medical appointments online without any worries. Easy and convenient booking system.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'fas fa-user-md',
      title: 'Qualified Doctors',
      description: 'Connect with experienced and certified medical professionals for the best healthcare services.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Emergency Services',
      description: '24/7 emergency medical services available. We are here when you need us the most.',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">{service.title}</h3>
              <p className="text-blue-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
