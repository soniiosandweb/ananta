import './Header.css';
import logo from "../../../assests/images/logo-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import EnquireForm from '../EnquireForm/EnquireForm';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");

  const [ scrollClass, setScrollClass ] = useState('scroll');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuLinks = [
    {
      name: "About Us",
      redirect: "/#about-us",
      id: "about-us",
    },
    {
      name: "Floor Plan",
      redirect: "/#floor-plan",
      id: "floor-plan",
    },
    {
      name: "Smart Living",
      redirect: "/#smart-living",
      id: "smart-living",
    },
    {
      name: "Amenities",
      redirect: "/#amenities",
      id: "amenities",
    },
    {
      name: "Connectivity",
      redirect: "/#connectivity",
      id: "connectivity",
    },
    {
      name: "Gallery",
      redirect: "/#gallery",
      id: "gallery",
    },
    {
      name: "Contact Us",
      redirect: "/#contact-us",
      id: "contact-us",
    },
  ];

  useEffect(() => {

    const listenScrollEvent = () => {
      if (locationValue[1] === "") {
        if (window.scrollY > 50) {
          setScrollClass('');
        } else {
          setScrollClass('scroll');
        }
      } else {
        setScrollClass('scroll');
      }
    };

    window.addEventListener("scroll", listenScrollEvent);

    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      // console.log(location.hash.slice(1))
      if (element) {
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth'});
        // window.scrollTo({ top: element.offsetTop, behavior: 'smooth'});
      }
    }
  }, [location, locationValue]);


  return (
    <>
      {/* Header */}
      <header className={`bg-primary-bg top-0 z-20 w-full ${scrollClass} ${locationValue[1] === "" ? 'sticky home-header' : 'sticky' }`}>
        <div className="px-0 sm:px-5 py-2.5 flex items-center">
          <div className="w-1/4 lg:w-1/6 xl:w-1/4 px-2.5">
            <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
              <LazyLoadImage
                src={logo}
                alt="The Ananta Aspire"
                style={{width: "100px"}}
                className='header-logo'
              />
            </NavLink>
          </div>
          <div className="hidden lg:block w-3/6 xl:w-2/4 px-2.5">
            <nav className="flex gap-5 items-center justify-center flex-wrap">
              {menuLinks.map((item,i) => (
                <Link smooth="true" to={item.redirect} key={i} className="text-sm font-medium hover:text-primary-brown header-nav-link" >{item.name}</Link>
              ))}
            </nav>
          </div>
          <div className="w-3/4 lg:w-2/6 xl:w-1/4 flex justify-end items-center gap-2 sm:gap-5 px-2.5 flex-wrap">
          
            <NavLink to='tel:+919888877182' className="text-sm sm:text-md font-medium header-nav-link"><FontAwesomeIcon icon={faPhone} className="text-primary-brown pr-1" /> +91 9888877182</NavLink>

            <button tabIndex='-1' className="text-xs font-semibold capitalize cursor-pointer bg-primary-brown p-2 sm:p-2.5 rounded-md text-white" onClick={handleOpen}>Enquire Now</button>
          </div>
        </div>
      </header>

      {/* Whatsapp Button */}
      <NavLink to='https://api.whatsapp.com/send?phone=919888877182' target="_blank" className="fixed z-20 bg-primary-lightGreen text-white text-md font-medium px-5 py-2 flex gap-2.5 rounded-full items-center overflow-hidden" style={{left: "20px", bottom: "24px"}}>
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl pulso-animation" />
        Whats App Now 
      </NavLink>

      {/* Download Brochure Button */}
      <div className='sticky h-0 z-20' style={{top: "45%"}}><button tabIndex='-1' className="w-max text-xs font-semibold capitalize cursor-pointer bg-primary-brown p-2 sm:p-2.5 rounded-md text-white absolute -rotate-90 download-broucher-btn" style={{right: "-46px"}} onClick={handleOpen}>Download Brochure</button>
      </div>

      {/* Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        className="form_popup"
        aria-hidden="false" 
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "450px",
              borderRadius: "30px",
              backgroundColor: "#f7f7f7",
              padding: "15px",
            },
          },
        }}
        aria-modal="true"
      >
        <div className="flex flex-col px-2.5">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>
          <EnquireForm title="Request For Brochure" setOpen={setOpen} />
        </div>
      </Dialog>
    </>
  );
};

export default Header;
