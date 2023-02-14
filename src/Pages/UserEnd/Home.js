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
import Slider from '../../components/landingpage/hero/Slider';

const videos = [
  {
    id: 1,
    title: "Sisir Saras 2023",
    src: "https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4",
    thumbnail:"https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
  },
  {
    id: 2,
    title: "Function",
    src: "https://ijentech.com/ormas-newdesign/assets/video/video1.mp4",
    thumbnail:"https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
  },
];

export default function Dashboard() {
  return (
    <>
      <Header />
      <LogoSection />
      <Navbar />
      {/* <Slider/> */}
      <Hero />
      <Notification />
      <Team />
      <About />
      <Gallery />
      <VideoGallery  videos={videos}/>
      <Products />
      <ImportantLink/>
      <Footer />
    </>
  );
}
