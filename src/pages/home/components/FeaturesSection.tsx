
import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "fas fa-clock",
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with immediate response and expert care when you need it most."
    },
    {
      icon: "fas fa-user-md",
      title: "Expert Specialists",
      description: "Highly qualified doctors and specialists with years of experience in their respective medical fields."
    },
    {
      icon: "fas fa-hospital",
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and facilities ensuring the highest quality of healthcare services."
    },
    {
      icon: "fas fa-ambulance",
      title: "Ambulance Service",
      description: "Quick and reliable ambulance services available 24/7 for emergency medical transportation."
    },
    {
      icon: "fas fa-pills",
      title: "Pharmacy Services",
      description: "On-site pharmacy with a wide range of medications and pharmaceutical products for your convenience."
    },
    {
      icon: "fas fa-heartbeat",
      title: "Health Checkups",
      description: "Comprehensive health screening packages and regular checkups to maintain your optimal health."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-lg font-medium text-blue-600 mb-4">Why Choose Us</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Healthcare Features That Matter
          </h2>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services with modern facilities, expert medical professionals, and patient-centered care to ensure your well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <i className={`${feature.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{feature.title}</h3>
              <p className="text-blue-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
