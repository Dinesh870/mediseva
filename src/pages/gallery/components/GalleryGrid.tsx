
import { useState } from 'react';

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'rooms', label: 'Patient Rooms' },
    { id: 'staff', label: 'Medical Staff' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'facilities',
      title: 'Modern Reception Area',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hospital%20reception%20desk%20with%20comfortable%20seating%20area%2C%20contemporary%20medical%20facility%20lobby%2C%20professional%20healthcare%20reception%20with%20elegant%20design%2C%20patient%20waiting%20area%20with%20modern%20furniture&width=400&height=300&seq=gallery2&orientation=landscape'
    },
    {
      id: 2,
      category: 'equipment',
      title: 'Advanced MRI Machine',
      image: 'https://readdy.ai/api/search-image?query=Modern%20MRI%20machine%20in%20clean%20medical%20room%2C%20advanced%20medical%20imaging%20equipment%2C%20hospital%20radiology%20department%20with%20high-tech%20diagnostic%20machinery%2C%20professional%20medical%20technology&width=400&height=300&seq=gallery3&orientation=landscape'
    },
    {
      id: 3,
      category: 'rooms',
      title: 'Private Patient Room',
      image: 'https://readdy.ai/api/search-image?query=Comfortable%20private%20hospital%20room%20with%20modern%20bed%2C%20patient%20room%20with%20medical%20equipment%2C%20clean%20healthcare%20accommodation%20with%20natural%20lighting%2C%20hospital%20bedroom%20with%20contemporary%20design&width=400&height=300&seq=gallery4&orientation=landscape'
    },
    {
      id: 4,
      category: 'staff',
      title: 'Medical Team',
      image: 'https://readdy.ai/api/search-image?query=Professional%20medical%20team%20in%20hospital%20corridor%2C%20doctors%20and%20nurses%20in%20white%20coats%2C%20healthcare%20professionals%20working%20together%2C%20medical%20staff%20in%20modern%20hospital%20setting&width=400&height=300&seq=gallery5&orientation=landscape'
    },
    {
      id: 5,
      category: 'facilities',
      title: 'Surgery Theater',
      image: 'https://readdy.ai/api/search-image?query=Modern%20operating%20room%20with%20surgical%20equipment%2C%20sterile%20surgery%20theater%20with%20advanced%20medical%20technology%2C%20hospital%20operating%20suite%20with%20professional%20lighting%2C%20surgical%20facility%20interior&width=400&height=300&seq=gallery6&orientation=landscape'
    },
    {
      id: 6,
      category: 'equipment',
      title: 'CT Scanner',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20CT%20scanner%20in%20medical%20imaging%20room%2C%20modern%20diagnostic%20equipment%2C%20hospital%20radiology%20department%20with%20computed%20tomography%20machine%2C%20medical%20technology%20for%20patient%20diagnosis&width=400&height=300&seq=gallery7&orientation=landscape'
    },
    {
      id: 7,
      category: 'rooms',
      title: 'ICU Ward',
      image: 'https://readdy.ai/api/search-image?query=Intensive%20care%20unit%20with%20monitoring%20equipment%2C%20ICU%20hospital%20room%20with%20life%20support%20systems%2C%20critical%20care%20medical%20facility%2C%20advanced%20patient%20monitoring%20technology&width=400&height=300&seq=gallery8&orientation=landscape'
    },
    {
      id: 8,
      category: 'facilities',
      title: 'Pharmacy',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hospital%20pharmacy%20with%20organized%20medication%20shelves%2C%20medical%20dispensary%20with%20professional%20layout%2C%20pharmaceutical%20department%20in%20healthcare%20facility%2C%20organized%20medicine%20storage%20area&width=400&height=300&seq=gallery9&orientation=landscape'
    },
    {
      id: 9,
      category: 'equipment',
      title: 'X-Ray Machine',
      image: 'https://readdy.ai/api/search-image?query=Digital%20X-ray%20machine%20in%20medical%20imaging%20room%2C%20modern%20radiography%20equipment%2C%20hospital%20diagnostic%20technology%2C%20medical%20imaging%20facility%20with%20professional%20setup&width=400&height=300&seq=gallery10&orientation=landscape'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Explore Our Medical Facility
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our modern healthcare facility equipped with state-of-the-art medical technology 
            and designed for optimal patient care and comfort.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl"></i>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 capitalize">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
