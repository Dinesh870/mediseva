
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import GalleryHero from './components/GalleryHero';
import GalleryGrid from './components/GalleryGrid';
import FacilityTour from './components/FacilityTour';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GalleryHero />
      <GalleryGrid />
      <FacilityTour />
      <Footer />
    </div>
  );
};

export default GalleryPage;
