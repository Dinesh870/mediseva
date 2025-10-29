
import { Link } from 'react-router-dom';

const FacilityTour = () => {
  const highlights = [
    {
      number: '136',
      label: 'Hospital Rooms',
      icon: 'fas fa-bed'
    },
    {
      number: '14',
      label: 'Ambulances',
      icon: 'fas fa-ambulance'
    },
    {
      number: '304',
      label: 'Awards Won',
      icon: 'fas fa-award'
    },
    {
      number: '3041',
      label: 'Happy Patients',
      icon: 'fas fa-smile'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h6 className="text-pink-600 font-semibold text-lg">Virtual Tour</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Experience Our World-Class Medical Facility
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our medical facility is designed with patient comfort and safety in mind. From our modern reception areas 
                to our advanced surgical suites, every space is equipped with the latest medical technology and maintained 
                to the highest standards of cleanliness and safety.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We invite you to explore our facility and see why thousands of patients trust us with their healthcare needs. 
                Our commitment to excellence is evident in every corner of our medical center.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors whitespace-nowrap"
              >
                Schedule a Visit
                <i className="fas fa-calendar-check ml-2"></i>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-600 hover:text-white transition-colors whitespace-nowrap"
              >
                Contact Us
                <i className="fas fa-phone ml-2"></i>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:bg-pink-50 transition-colors">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${highlight.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{highlight.number}</div>
                <div className="text-gray-600 font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityTour;
