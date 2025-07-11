import './Banner.css';
import Slider from "react-slick";
import banner1 from "../../../assests/images/slider/banner1.jpeg";
import banner2 from "../../../assests/images/slider/banner2.jpeg";
import banner3 from "../../../assests/images/slider/banner3.jpeg";
import banner4 from "../../../assests/images/slider/banner4.jpeg";
import Possession from "../../../assests/images/possession.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Detect scroll position and add/remove class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    autoplay: false,
    autoplaySpeed: 50000,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false,
    lazyLoad: "progressive",
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  const slides = [
    {
      image: banner1,
      title: "Ananta Aspire is Where Luxury Meets Innovation",
      subtitle: (
        <>
          Luxury 3 & 4 BHK Apartments for Sale in Zirakpur
        </>
      ),
    },
    {
      image: banner2,
      title: "Smart Living Begins at The Ananta Aspire",
      subtitle: (
        <>
          Combining modern technology and premium comfort in Zirakpur’s most exclusive address.
        </>
      ),
    },
    {
      image: banner3,
      title: "Make The Ananta Aspire Your Gateway to Premium Living",
      subtitle: (
        <>
          440 exclusive luxury residences with integrated smart home features and unmatched comfort.

        </>
      ),
    },
    {
      image: banner4,
      title: "Live Smarter, Live Better with the Ananta Aspire",
      subtitle: (
        <>
          Explore luxury 3 & 4 BHK apartments for sale in Zirakpur, enriched with voice-controlled smart home features.

        </>
      ),
    },
  ];

  return (
    <section className={`overflow-hidden banner-section ${scrolled ? 'BannerScrolled' : ''}`}>

      {/* <div className='possession'>Ready <span>For</span> Possession</div> */}

      <Slider {...settings}>
        {slides.map((el, i) => (
          <div className='banner-wrapper w-full content-center h-screen relative overflow-hidden' key={i}>
            <img
              src={el.image}
              alt="The Ananta Aspire - Luxurious Apartments in Zirakpur"
              className="object-cover bg-img object-center absolute top-0 left-0 right-0 h-full w-full"
            />
            <div className='max-w-6xl mr-auto ml-0 flex absolute top-0 left-0 right-0 h-full w-full banner-slider text-white px-2.5 py-3 z-10'>
              <div className="flex flex-col w-full h-full items-center ">
                <div md={12} xl={10} className='w-full md:w-4/5 m-auto'>
                  <div className='flex h-full flex-col gap-4 lg:gap-[26px] text-left banner-wrapper'>
                    <div className="possession-txt gap-4 lg:gap-[26px] flex  flex-col justify-center w-fit">
                      <div className='w-max flex '>  <img src={Possession} alt="" className='w-[280px] sm:w-[380px] md:w-[449px] ' /></div>
                      {activeSlide === i ? <h1 className='banner-title  text-2xl sm:text-3xl md:text-5xl font-semibold w-fit'> {el.title}</h1> : <h2 className='banner-title  text-2xl sm:text-3xl md:text-5xl font-semibold w-fit'> {el.title}</h2>}
                    </div>
                    <h2 className='banner-sub-title  text-lg sm:text-xl md:text-3xl font-medium'>{el.subtitle}
                    </h2>
                    <p className=' text-[14px] sm:text-[16px] md:text-[20px] font-medium bg-[#FF0500]  w-fit luxary'>Luxury flats starting at just ₹ 1.5 Cr.</p>
                    <div className='w-72 h-px bg-white mt-8'></div>
                    <ul className='flex flex-col lg:flex-row gap-4'>
                      <li className='flex gap-2 items-center text-sm font-medium'>
                        <FontAwesomeIcon icon={faHomeLg} /> 3 BHK Apartments
                      </li>
                      <li className='flex gap-2 items-center text-sm font-medium'>
                        <FontAwesomeIcon icon={faHomeLg} /> 3+1 BHK Apartments
                      </li>
                      <li className='flex gap-2 items-center text-sm font-medium'>
                        <FontAwesomeIcon icon={faHomeLg} /> 4+1 BHK Apartments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full absolute top-0 h-full' style={{ backgroundColor: "#00000080" }}></div>
            <p className='text-xs font-semibold p-1 absolute mx-auto bottom-0.5 right-3 text-white w-max'>
              *Image shown is for illustration purposes only
            </p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
