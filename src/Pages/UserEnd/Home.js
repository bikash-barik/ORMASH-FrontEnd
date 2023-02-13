import Hero from '../../components/landingpage/hero/Hero';
import Header from '../../components/landingpage/home/Header';
import LogoSection from '../../components/landingpage/logosection/LogoSection';
import Navbar from '../../components/landingpage/navbar/Navbar';
import Notification from '../../components/landingpage/Notification';
import Team from '../../components/landingpage/teams/Team';
import About from '../../components/landingpage/about/About';
import Gallery from '../../components/landingpage/gallery/Gallery';
import VideoGallery from '../../components/landingpage/videogallery/VideoGallery';
import Products from '../../components/landingpage/products/Products';
import Footer from '../../components/landingpage/footer/Footer';
import ImportantLink from '../../components/landingpage/ImportantLinks/ImportantLink';

export default function Dashboard() {
  return (
    <>
      <Header />
      <LogoSection />
      <Navbar />
      <Hero />
      <Notification />
      <Team />
      <About />
      <Gallery />
      <VideoGallery />
      <Products />
      <ImportantLink/>
      <Footer />
    </>
  );
}
