
const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Trusted Platform',
      description: 'Secure and reliable healthcare booking system trusted by thousands of patients.',
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Easy Booking',
      description: 'Simple and intuitive appointment scheduling process with instant confirmation.',
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-stethoscope',
      title: 'Quality Care',
      description: 'Access to qualified doctors and comprehensive medical services.',
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Friendly',
      description: 'Book appointments anytime, anywhere using your mobile device.',
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your healthcare needs.',
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-award',
      title: 'Award Winning',
      description: 'Recognized for excellence in healthcare service delivery.',
      color: 'bg-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-blue-600 font-semibold text-lg mb-4">Why Choose Us</h6>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Why Patients Trust MediSeva Healthcare
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing exceptional healthcare services with a focus on patient satisfaction, 
            quality care, and innovative medical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-white text-xl`}></i>
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

export default WhyChooseUs;
