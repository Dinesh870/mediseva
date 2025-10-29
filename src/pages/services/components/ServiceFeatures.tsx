
const ServiceFeatures = () => {
  const features = [
    {
      icon: 'fas fa-clock',
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency medical services with immediate response and expert care.'
    },
    {
      icon: 'fas fa-microscope',
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art diagnostic equipment for accurate and timely medical assessments.'
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Emergency Transport',
      description: 'Fully equipped ambulance services for emergency medical transportation.'
    },
    {
      icon: 'fas fa-pills',
      title: 'Pharmacy Services',
      description: 'On-site pharmacy with comprehensive medication management and consultation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Why Choose Our Services
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing exceptional healthcare services with advanced medical technology, 
            experienced professionals, and patient-centered care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <i className={`${feature.icon} text-2xl text-blue-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h4>
              <p className="text-blue-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
