import './Banner.css';
import Slider from "react-slick";
import banner1 from "../../../assests/images/slider/banner1.jpeg";
import banner2 from "../../../assests/images/slider/banner2.jpeg";
import banner3 from "../../../assests/images/slider/banner3.jpeg";
import banner4 from "../../../assests/images/slider/banner4.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

const BannerSlider = () => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
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
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
  ];

  return (

    <section className="overflow-hidden ">
      <Slider {...settings}>
        {slides.map((el, i) => (
          <div className='w-full content-center h-screen relative overflow-hidden' key={i}>
            <img src={el.image} alt="Banner" className="object-cover object-center absolute top-0 left-0 right-0 h-full w-full" />
            <div className='max-w-6xl mr-auto ml-0 flex absolute top-0 left-0 right-0 h-full w-full banner-slider text-white px-2.5 py-3 z-10'>
              <div className="flex flex-col w-full h-full items-center ">
                <div md={12} xl={10} className='w-full md:w-4/5 m-auto'>
                  <div className='flex   h-full flex-col gap-4 text-left'>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-semibold'>Where Luxury Meets Innovation</h1>
                    <h2 className='text-lg sm:text-xl md:text-3xl font-medium'>Embrace the Future with Cutting-Edge Design</h2>

                    <div className='w-72 h-px bg-white mt-16'></div>
                    <ul className='flex flex-col lg:flex-row gap-4'>
                      <li className='flex gap-2 items-center text-sm font-semibold'><FontAwesomeIcon icon={faHomeLg} /> 3 BHK Apartments</li>
                      <li className='flex gap-2 items-center text-sm font-semibold'><FontAwesomeIcon icon={faHomeLg} /> 3+1 BHK Apartments</li>
                      <li className='flex gap-2 items-center text-sm font-semibold'><FontAwesomeIcon icon={faHomeLg} /> 4+1 BHK Apartments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <LazyLoadImage
                          src={el.image}
                          alt={el.alt}
                          className="w-full object-cover object-center absolute top-0 h-full banner-slider-bg"
                          style={{ zIndex: "-1" }}
                      /> */}
            <div className='w-full absolute top-0 h-full' style={{ backgroundColor: "#00000080" }}></div>
            <p className='text-xs font-semibold p-1 absolute mx-auto bottom-0.5 right-3 text-white w-max'>*Image shown is for illustration purposes only</p>
          </div>
        ))}
      </Slider>
    </section>
  )
 
};

export default BannerSlider
