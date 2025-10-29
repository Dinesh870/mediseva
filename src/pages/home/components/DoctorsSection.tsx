
import React from 'react';
import { Link } from 'react-router-dom';

export const DoctorsSection: React.FC = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ Years",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20cardiologist%20doctor%20in%20white%20coat%20with%20stethoscope%2C%20confident%20smile%2C%20modern%20medical%20office%20background%2C%20healthcare%20professional%20portrait%2C%20medical%20expertise%2C%20trustworthy%20appearance&width=400&height=500&seq=doctor1&orientation=portrait",
      rating: 4.9,
      patients: "2000+"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12+ Years",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20neurologist%20doctor%20in%20white%20coat%20with%20medical%20equipment%2C%20confident%20expression%2C%20modern%20hospital%20background%2C%20healthcare%20specialist%20portrait%2C%20medical%20professional%2C%20expert%20appearance&width=400&height=500&seq=doctor2&orientation=portrait",
      rating: 4.8,
      patients: "1800+"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ Years",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20pediatrician%20doctor%20in%20white%20coat%20with%20friendly%20smile%2C%20children%20healthcare%20specialist%2C%20modern%20pediatric%20clinic%20background%2C%20caring%20medical%20professional%2C%20child-friendly%20appearance&width=400&height=500&seq=doctor3&orientation=portrait",
      rating: 4.9,
      patients: "1500+"
    },
    {
      id: 4,
      name: "Dr. David Kumar",
      specialty: "Orthopedic Surgeon",
      experience: "18+ Years",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20orthopedic%20surgeon%20doctor%20in%20white%20coat%20with%20confident%20posture%2C%20surgical%20expertise%2C%20modern%20medical%20facility%20background%2C%20healthcare%20specialist%20portrait%2C%20experienced%20medical%20professional&width=400&height=500&seq=doctor4&orientation=portrait",
      rating: 4.7,
      patients: "2200+"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-lg font-medium text-blue-600 mb-4">Our Expert Team</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Meet Our Experienced Doctors
          </h2>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to providing you with the best healthcare services. Each specialist brings years of expertise in their respective fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                <div className="flex items-center justify-between text-sm text-blue-600 mb-4">
                  <span className="flex items-center">
                    <i className="fas fa-briefcase mr-2"></i>
                    {doctor.experience}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-users mr-2"></i>
                    {doctor.patients}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    to="/appointment"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Book Appointment
                  </Link>
                  <button className="p-2 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                    <i className="fas fa-heart text-blue-400"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            View All Doctors
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
