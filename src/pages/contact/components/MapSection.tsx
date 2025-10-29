
const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Find Our Location
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit our modern healthcare facility conveniently located in India. 
            We're easily accessible and offer ample parking for our patients.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.353856082635!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f0b81f13ad%3A0x3c12f7681185f869!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1647834567890!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MediSeva Healthcare Location"
              className="w-full h-96 lg:h-[450px]"
            ></iframe>
          </div>
          
          <div className="p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-car text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Parking Available</h4>
                <p className="text-gray-600 text-sm">Free parking for all patients and visitors</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bus text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
                <p className="text-gray-600 text-sm">Easily accessible by bus and metro</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-wheelchair text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-gray-600 text-sm">Wheelchair accessible facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
