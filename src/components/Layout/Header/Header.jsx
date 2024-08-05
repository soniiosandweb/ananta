import './Header.css';
import logo from "../../../assests/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuLinks = [
    {
      name: "About Us",
      redirect: "#about-us",
    },
    {
      name: "Floor Plan",
      redirect: "#floor-plan",
    },
    {
      name: "Smart Living",
      redirect: "#smart-living",
    },
    {
      name: "Amenities",
      redirect: "#amenities",
    },
    {
      name: "Connectivity",
      redirect: "#connectivity",
    },
    {
      name: "Gallery",
      redirect: "#gallery",
    },
    {
      name: "Contact Us",
      redirect: "#contact-us",
    },
  ];


  return (
    <>
      {/* Header */}
      <header className="px-0 sm:px-5 py-2.5 bg-primary-bg sticky top-0 z-20">
        <div className="flex items-center">
          <div className="w-1/4 lg:w-1/6 xl:w-1/4 px-2.5">
            <NavLink to="/" className="block w-max">
              <LazyLoadImage
                src={logo}
                alt="The Ananta Aspire"
                style={{width: "100px"}}
              />
            </NavLink>
          </div>
          <div className="hidden lg:block w-3/6 xl:w-2/4 px-2.5">
            <nav className="flex gap-5 items-center justify-center flex-wrap">
              {menuLinks.map((item,i) => (
                <NavLink to={item.redirect} key={i} className="text-sm font-medium hover:text-primary-brown" reloadDocument={true}>{item.name}</NavLink>
              ))}
            </nav>
          </div>
          <div className="w-3/4 lg:w-2/6 xl:w-1/4 flex justify-end items-center gap-2 sm:gap-5 px-2.5 flex-wrap">
            <NavLink to='tel:+919888877182' className="text-sm sm:text-md font-medium"><FontAwesomeIcon icon={faPhone} className="text-primary-brown pr-1" /> +91 9888877182</NavLink>

            <button className="text-xs font-semibold capitalize cursor-pointer bg-primary-brown p-2 sm:p-2.5 rounded-md text-white" onClick={handleOpen}>Enquire Now</button>
          </div>
        </div>
      </header>

      {/* Whatsapp Button */}
      <NavLink to='https://api.whatsapp.com/send?phone=919888877182' target="_blank" className="fixed z-20 bg-primary-lightGreen text-white text-md font-medium px-5 py-2 flex gap-2.5 rounded-full items-center overflow-hidden" style={{left: "8%", bottom: "15%"}}>
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl pulso-animation" />
        Whats App Now 
      </NavLink>

      {/* Download Brochure Button */}
      <button className="w-max text-xs font-semibold capitalize cursor-pointer bg-primary-brown p-2 sm:p-2.5 rounded-md text-white fixed z-20 top-1/2 -right-11 -rotate-90" onClick={handleOpen}>Download Brochure</button>

      {/* Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        className="form_popup w-full rounded-3xl"
        maxWidth="450px"
      >
        <div className="flex flex-col p-4 ">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>
          <p>Please Fill In Your Details</p>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
