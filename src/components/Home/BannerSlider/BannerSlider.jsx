import './Banner.css';
import Slider from "react-slick";
import banner1 from "../../../assests/images/slider/banner1.jpeg";
import banner2 from "../../../assests/images/slider/banner2.jpeg";
import banner3 from "../../../assests/images/slider/banner3.jpeg";
import banner4 from "../../../assests/images/slider/banner4.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

const BannerSlider = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false,
    lazyLoad: "progressive",
  };

  const slides = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
  ];

  return (
    <section className="banner-slider-section relative">
      <Slider {...settings}>
        {slides.map((el, i) => (
            <div className="w-full banner-slider" key={i}>
                <LazyLoadImage src={el.image} alt="Banner" className="object-cover object-center h-full w-full" />
            </div>
        ))}
      </Slider>
      <div className='max-w-5xl m-auto absolute top-0 left-0 right-0 h-full w-full text-center z-10 flex flex-col items-center justify-center gap-5 text-white px-2.5'>
        <h1 className='text-3xl md:text-5xl font-semibold'>Where Luxury Meets Innovation - Unveiling a Life Beyond Ordinary</h1>
        <h2 className='text-xl md:text-3xl font-medium'>Embrace the Future with Cutting-Edge Design and Exclusive Amenities</h2>
        <div className='h-12'></div>
        <div className='w-72 border-b border-white'></div>
        <ul className='flex gap-4 md:gap-7 flex-wrap justify-center items-center'>
            <li className='text-sm flex gap-2 items-center'><FontAwesomeIcon icon={faHomeLg} /> <span>3 BHK Apartments</span></li>
            <li className='text-sm flex gap-2 items-center'><FontAwesomeIcon icon={faHomeLg} /> <span>3+1 BHK Apartments</span></li>
            <li className='text-sm flex gap-2 items-center'><FontAwesomeIcon icon={faHomeLg} /> <span>4+1 BHK Apartments</span></li>
        </ul>
      </div>
    </section>
  );
};

export default BannerSlider;
