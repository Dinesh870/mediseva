
const AboutContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h6 className="text-blue-600 font-semibold text-lg">About Us</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                Book Appointments with Top Doctors Effortlessly
              </h2>
              <p className="text-blue-600 leading-relaxed">
                Schedule your medical appointments online with ease. Find experienced doctors, choose your preferred time slot, and get instant confirmation—all from the comfort of your home.
              </p>
              <p className="text-blue-600 leading-relaxed">
                Convenient, secure, and trusted by thousands. Book now and take control of your healthcare journey. Our platform connects you with qualified medical professionals who are committed to providing exceptional care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-user-md text-white"></i>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Expert Doctors</h4>
                <p className="text-blue-600 text-sm">Qualified and experienced medical professionals</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">24/7 Service</h4>
                <p className="text-blue-600 text-sm">Round-the-clock medical assistance available</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Medical%20team%20consultation%2C%20doctors%20discussing%20patient%20care%2C%20professional%20healthcare%20meeting%2C%20medical%20professionals%20collaborating%2C%20hospital%20conference%20room%20with%20medical%20charts%20and%20equipment%2C%20teamwork%20in%20healthcare%20setting&width=600&height=500&seq=about2&orientation=landscape"
              alt="Medical Team"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-blue-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
