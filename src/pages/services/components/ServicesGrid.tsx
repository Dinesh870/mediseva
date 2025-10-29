
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      icon: 'fas fa-user-md',
      title: 'General Consultation',
      description: 'Comprehensive medical consultations with experienced physicians for routine check-ups and health assessments.',
      features: ['Health Assessment', 'Medical History Review', 'Treatment Planning', 'Follow-up Care'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Cardiology',
      description: 'Specialized cardiac care including heart disease prevention, diagnosis, and treatment by certified cardiologists.',
      features: ['ECG Testing', 'Heart Monitoring', 'Cardiac Surgery', 'Preventive Care'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-baby',
      title: 'Pediatrics',
      description: 'Comprehensive healthcare services for infants, children, and adolescents with specialized pediatric care.',
      features: ['Child Health Check-ups', 'Vaccinations', 'Growth Monitoring', 'Pediatric Surgery'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-brain',
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge technology.',
      features: ['Brain Imaging', 'Neurological Testing', 'Stroke Care', 'Epilepsy Treatment'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-bone',
      title: 'Orthopedics',
      description: 'Specialized care for bone, joint, and muscle conditions including surgical and non-surgical treatments.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-eye',
      title: 'Ophthalmology',
      description: 'Complete eye care services including vision testing, eye disease treatment, and surgical procedures.',
      features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'Vision Correction'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-tooth',
      title: 'Dental Care',
      description: 'Comprehensive dental services including preventive care, restorative treatments, and oral surgery.',
      features: ['Dental Cleaning', 'Tooth Restoration', 'Oral Surgery', 'Cosmetic Dentistry'],
      color: 'bg-blue-600'
    },
    {
      icon: 'fas fa-female',
      title: 'Gynecology',
      description: 'Specialized womens health services including reproductive health, pregnancy care, and gynecological treatments.',
      features: ['Prenatal Care', 'Gynecological Exams', 'Family Planning', 'Womens Health'],
      color: 'bg-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-blue-600 font-semibold text-lg mb-4">Our Services</h6>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of medical services delivered by experienced healthcare professionals 
            using the latest medical technology and evidence-based practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">{service.title}</h4>
                <p className="text-blue-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-blue-600">
                      <i className="fas fa-check text-blue-600 mr-2"></i>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/appointment"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors whitespace-nowrap"
                >
                  Book Appointment
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
