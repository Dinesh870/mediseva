
import { Link } from 'react-router-dom';

const GalleryHero = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.9), rgba(139, 69, 19, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20hospital%20interior%20lobby%20with%20elegant%20design%2C%20healthcare%20facility%20reception%20area%2C%20medical%20center%20entrance%20hall%20with%20contemporary%20architecture%2C%20professional%20healthcare%20environment&width=1920&height=600&seq=gallery1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">Our Medical Facility</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art medical facility featuring modern equipment, 
            comfortable patient areas, and advanced healthcare technology.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link to="/" className="hover:text-pink-300 transition-colors">Home</Link>
            <i className="fas fa-angle-right"></i>
            <span>Gallery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
