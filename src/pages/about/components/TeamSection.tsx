
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Medical Officer',
      specialization: 'Cardiology',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20in%20white%20coat%2C%20confident%20medical%20professional%20portrait%2C%20healthcare%20specialist%20with%20stethoscope%2C%20experienced%20physician%20in%20medical%20setting%2C%20trustworthy%20doctor%20headshot&width=300&height=400&seq=team1&orientation=portrait',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Senior Physician',
      specialization: 'Internal Medicine',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20doctor%20in%20white%20coat%2C%20experienced%20medical%20practitioner%20portrait%2C%20healthcare%20professional%20with%20stethoscope%2C%20confident%20physician%20in%20hospital%20setting%2C%20medical%20specialist%20headshot&width=300&height=400&seq=team2&orientation=portrait',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Pediatric Specialist',
      specialization: 'Pediatrics',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20pediatric%20doctor%2C%20friendly%20medical%20specialist%20for%20children%2C%20healthcare%20professional%20in%20white%20coat%2C%20experienced%20pediatrician%20portrait%2C%20caring%20doctor%20with%20warm%20smile&width=300&height=400&seq=team3&orientation=portrait',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. James Wilson',
      position: 'Emergency Medicine',
      specialization: 'Emergency Care',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20emergency%20doctor%2C%20experienced%20emergency%20medicine%20physician%2C%20healthcare%20professional%20in%20medical%20scrubs%2C%20confident%20emergency%20room%20doctor%20portrait%2C%20medical%20specialist%20headshot&width=300&height=400&seq=team4&orientation=portrait',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-blue-600 font-semibold text-lg mb-4">Our Team</h6>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Meet Our Expert Medical Team
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of medical professionals brings years of experience and expertise 
            to provide you with the highest quality healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-3">
                      <a href={member.social.facebook} className="w-8 h-8 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <i className="fab fa-facebook-f text-sm"></i>
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <i className="fab fa-twitter text-sm"></i>
                      </a>
                      <a href={member.social.linkedin} className="w-8 h-8 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                <p className="text-blue-600 text-sm">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
